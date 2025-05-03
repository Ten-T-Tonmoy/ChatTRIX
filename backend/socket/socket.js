import { Server } from "socket.io";
import http from "http";
import express from "express";
import exp from "constants";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5000/"],
    methods: ["GET", "POST"],
  },
});

const socketUserMap = {};
// export const receiverSocketId=()

io.on("connection", (socket) => {
  console.log("user connected : ", socket.id);

  //extract userId from handshake huh
  const userId = socket.handshake.query.userId;
  if (userId != "undefined") socketUserMap[userId] = socket.id;

  io.emit("activeUsers", Object.keys(socketUserMap));
  //returning all userId of active users

  socket.on("disconnect", () => {
    console.log("user disconnected ", socket.id);

    io.emit("activeUsers", Object.keys(socketUserMap));
  });
});

export { app, io, server };
