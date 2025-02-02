import express from "express";
import {getMsg, sendMsg} from "../controllers/msg.controller.js";
import protectRoute from "../middleware/protectRoute.js";


const  Router = express.Router();

Router.post('/send/:id',protectRoute,sendMsg);
Router.get('/:id',protectRoute,getMsg);



export default Router;