import express from "express";
import {getMsg, sendMsg} from "../controllers/msg.controller.js";


const  Router = express.Router();

Router.Post('/send/:id',protectRoute,sendMsg);
Router.get('/:id',protectRoute,getMsg);



export default Router;