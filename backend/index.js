const dotenv = require("dotenv");
dotenv.config();// env contains machine specific info

const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
var cors = require('cors')
const path = require("path");
const setUpSocketConnection = require("./config/socket");

connectDB();// connecting to mongodb using URI
const app = express();
app.use(cors())
app.use(express.json());//In order to access and work with json data from client in your Express routes and handlers,you need to parse it into a JavaScript object
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);


const __dirname1 = path.resolve();// signifies current working directory

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/frontend/build")));// cd frontend -> npm run build
    // index.html inside frontend build folder contains minified version of react app,this is a express server now serving the SPA
    // if we run node sever.js after this , we will see our react app on the server PORT
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running..");
    });
}
app.use(notFound);// Error Handling middlewares
app.use(errorHandler);

const server = app.listen(
    process.env.PORT,
    console.log(`Server running on PORT ${process.env.PORT}...`.yellow.bold)
);

setUpSocketConnection(server);
