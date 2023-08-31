
const setUpSocketConnection = (server) => {
    const io = require("socket.io")(server, {
        pingTimeout: 60000,//Amount of time socket connection waits while being in-active
        cors: {
            origin: "http://localhost:3000",// client runs on 3000
            // credentials: true,
        },
    });

    io.on("connection", (socket) => {
        console.log("Connected to socket.io");

        socket.on("setup", (userData) => {
            socket.join(userData._id);// creating a room exclusive to that user
            socket.emit("connected");
        });

        socket.on("join chat", (room) => {
            socket.join(room);
            console.log("User Joined Room: " + room);
        });

        socket.on("typing", (room) => socket.in(room).emit("typing"));
        // "typing"/"stop typing events" emitted inside the room to all subs
        socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

        socket.on("new message", (newMessageRecieved) => {
            var chat = newMessageRecieved.chat;

            if (!chat.users) return console.log("chat.users not defined");

            chat.users.forEach((user) => {
                if (user._id == newMessageRecieved.sender._id) return;

                socket.in(user._id).emit("message recieved", newMessageRecieved);
                // in means insude that users room, emit/send this message
            });
        });

        socket.off("setup", () => {
            console.log("USER DISCONNECTED");
            socket.leave(userData._id);
        });
    });
}

module.exports = setUpSocketConnection;
