require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const amqp = require('amqplib');
const mongoose = require("mongoose");
const Message = require('./models/FullMessageModel');
const { constants } = require('buffer');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(`Error`);
        process.exit();
    }
};

connectDB();// connecting to mongodb using URI

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let connection, channel;

async function consumeMessages() {
    connection = await amqp.connect('amqp://0.0.0.0:5672');
    channel = await connection.createChannel();

    const queueName = 'message_created_queue';

    await channel.assertQueue(queueName);
    console.log(`Waiting for messages in queue: ${queueName}`);

    channel.consume(queueName, async (msg) => {
        if (msg !== null) {
            const chatMessage = await JSON.parse(msg.content.toString());
            console.log(chatMessage);
            const msgId=(chatMessage._id);
            const msgExists = await Message.findOne({ _id:msgId });

            if (msgExists) {
                console.log('Message already exists')
                return;
            }
            let message = await Message.create(chatMessage);
            console.log(message);
            channel.ack(msg);
        }
    });
}
consumeMessages();

//@description     Get all Messages for a particular chat ID
//@route           GET /message/:chatId
//@access          Protected
app.get('/api/Message/:chatId', async (req, res) => {
    try {
        const messages = await Message.find({ "chat._id": req.params.chatId })
        res.json(messages);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});



module.exports = app;
