import React from "react";
import { useAuthContext } from "../../context/authContext";
import useConvo from "../../zustand/useConvo";
import { timeFormat } from "../../utils/timeFormatter";

const Message = ({ msg }) => {
  /**
   * msg
   * senderId
   * receiverId
   * msg
   */
  const { authUser } = useAuthContext();
  const { selectedConvo } = useConvo();
  const fromOwnself = msg.senderId === authUser._id;
  const formattedTime = timeFormat(msg.createdAt);
  // a class to cs
  const chatStyle = fromOwnself
    ? "bg-blue-400 self-end "
    : "bg-gray-200 self-start";

  return <div>{msg.msg}</div>;
};

export default Message;
