const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: "String" },
        email: { type: "String" },
        password: { type: "String" },
        pic: {
            type: "String",
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestaps: true }
);

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [
            {
                type: userSchema
            },
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FullMessage',
        },
        groupAdmin: { type: userSchema },
    },
    { timestamps: true }
);

const fullMsgSchema = mongoose.Schema(
    {
        sender: { type: userSchema },
        content: { type: String, trim: true },
        chat: { type: chatModel },
        readBy: [{ type: userSchema }],
    },
    { timestamps: true }
);

const Message = mongoose.model("FullMessage", fullMsgSchema);
module.exports = Message;
