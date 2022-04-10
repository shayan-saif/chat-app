const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
// const cors = require("cors");

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat-message", (msg) => {
    console.log(msg);
    io.emit("chat-message", msg);
  });
});

server.listen(4200, () => {
  console.log("listening on *:4200");
});
