import Convo from "../models/convo.model.js";
import Msg from "../models/message.model.js";
import mongoose from "mongoose";
//ps the res.user that middleware sends here becomes req
export const sendMsg = async (req, res) => {
  try {
    //take id from params->

    const { msg } = req.body;
    //make sure to keep name accurate while destructuring!!
    const { id: receiverId } = req.params;
    //beaware the middleware made req=> req.user
    const senderId = req.user._id;

    //casting?

    if (!mongoose.Types.ObjectId.isValid(receiverId)) {
      return res.status(400).json({ message: "Invalid receiver ID" });
    }

    let actConvo = await Convo.findOne({
      //mongoose way of shits
      participants: { $all: [senderId, receiverId] },
    });
    if (!actConvo) {
      actConvo = await Convo.create({
        participants: [senderId, receiverId],
      });
    }

    const newMsg = new Msg({
      senderId, //:senderId
      receiverId, //:receiverId
      msg, //:message
    });

    if (newMsg) {
      actConvo.messages.push(newMsg._id);
    }
    //awaiting together will be faster since async and parallel
    //socket io shit goes here

    await Promise.all([actConvo.save(), newMsg.save()]);

    res.status(201).json(newMsg);
  } catch (e) {
    console.log("SendMsg controller error ", e.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

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
