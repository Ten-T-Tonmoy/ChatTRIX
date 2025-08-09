import Convo from "../models/convo.model.js";
import Msg from "../models/message.model.js";
import mongoose from "mongoose";
import { getReceiverSocketId } from "../socket/socket.js";
//ps the res.user that middleware sends here becomes req

//------------------------------------Send Message------------------------------
export const sendMsg = async (req, res) => {
  try {
    //take id from params->

    const { msg } = req.body;
    //make sure to keep name accurate while destructuring!!
    const { id: receiverId } = req.params;
    //beaware the middleware made req=> req.user
    const senderId = req.user._id;

    //casting?

    // if (!mongoose.Types.ObjectId.isValid(receiverId)) {
    //   return res.status(400).json({ message: "Invalid receiver ID" });
    // }

    let currentConversation = await mongoose.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!currentConversation) {
      currentConversation = await Convo.create({
        participants: [senderId, receiverId],
      });
    }

    const newMsg = new Msg({
      senderId, //:senderId
      receiverId, //:receiverId
      msg, //:message
    });
    //this generates _id .. mongoose

    if (newMsg) {
      currentConversation.messages.push(newMsg._id);
    }
    //awaiting together will be faster since async and parallel
    //socket io shit goes here

    await Promise.all([currentConversation.save(), newMsg.save()]);

    //----------------socket----------------------------
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (getReceiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMsg);
    }

    res.status(201).json(newMsg);
  } catch (e) {
    console.log("SendMsg controller error ", e.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

//-----------------------------Get message ------------------------------------

export const getMsg = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const gottenConvo = await Convo.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    res.status(201).json(gottenConvo);
  } catch (e) {
    console.log("getMsg controller error ", e.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};


// id ! _id  userId 