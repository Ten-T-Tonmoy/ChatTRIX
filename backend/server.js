import express from "express";
import dotenv from "dotenv";
import  authRoutes from "./routes/authRoutes";

const app=express();
const port = process.env.PORT || 3000;

//middleware nd shits
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routes
app.use("/api/auth",authRoutes);



app.listen(port,()=>{
    console.log(`Server is Running on port:${port}`);
});