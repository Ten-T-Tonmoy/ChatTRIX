import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authroutes.js";
import cookieParser from "cookie-parser";
import msgroutes from "./routes/msgroutes.js";
import connectDB from "./db/connectDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
// const app = express(); using socket one
const port = process.env.PORT || 3000;
connectDB();
//middleware nd shits
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routes
app.use("/api/auth", authRoutes);
app.use("/api/message", msgroutes);

server.listen(port, () => {
  connectDB();
  console.log(`Server is Running on port:${port}`);
});
