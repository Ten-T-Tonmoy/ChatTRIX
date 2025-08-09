import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5000"],
    methods: ["GET", "POST"],
  },
});

const socketUserMap = {};
// userId:socketId

export const getReceiverSocketId = (receiverId) => {
  return socketUserMap[receiverId];
  //takes userId returns socket
};

// export const receiverSocketId=()

io.on("connection", (socket) => {
  console.log("new user connected : ", socket.id);

  //extract userId from handshake huh
  const userId = socket.handshake.query.userId;
  if (userId != "undefined") socketUserMap[userId] = socket.id;

  io.emit("activeUsers", Object.keys(socketUserMap));
  //returning all userId of active users

  socket.on("disconnect", () => {
    console.log("user disconnected ", socket.id);
    delete socketUserMap[socket.id];
    io.emit("activeUsers", Object.keys(socketUserMap));
  });
});

export { app, io, server };

/**
 * client to server sendin shit
 *
 * only while connecting
 * socket=io ('url', {
 *    query:{userId:"whatever",role:"whhatever"}
 * })
 * socket.on(connect?)
 * socket.emit('event name','') ?
 *
 *
 * only while connecting
 * io.on("connection",(socket)=>{
 *  console.log(socket.handshake.query.userId)
 *
 *  socket.emit('welcome',{
 *    message:"whatever to welcome a hobo"
 *    time:Date.now(),
 *    tips:['dont speak of segs','dont be gay']
 * })
 * })
 */
