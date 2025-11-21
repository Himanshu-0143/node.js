import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// socket.io connection event
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // join room
  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room: ${room}`);

    socket.to(room).emit("message", {
      user: "system",
      message: `User ${socket.id} joined the room`
    });
  });

  // leave room
  socket.on("leaveRoom", (room) => {
    socket.leave(room);
    console.log(`User ${socket.id} left room: ${room}`);

    socket.to(room).emit("message", {
      user: "system",
      message: `User ${socket.id} left the room`
    });
  });

  // receiving message
  socket.on("message", ({ room, message }) => {
    console.log("Message received:", message);
    io.to(room).emit("message", {
      user: socket.id,
      message
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
