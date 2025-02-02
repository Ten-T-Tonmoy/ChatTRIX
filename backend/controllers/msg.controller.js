import Convo from "../models/convo.model.js";
import Msg from "../models/message.model.js";

//ps the res.user that middleware sends here becomes req
export const sendMsg = async (req, res) => {
  try {
    //take id from params->

    const { message } = req.body;
    const { id: receiverId } = req.params;
    //beaware the middleware made req=> req.user
    const { id: senderId } = req.user._id;

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
      message, //:message
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
      $all: [senderId, receiverId],
    }).populate("messages");
    res.status(201).json(gottenConvo);
  } catch (e) {
    console.log("getMsg controller error ", e.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
