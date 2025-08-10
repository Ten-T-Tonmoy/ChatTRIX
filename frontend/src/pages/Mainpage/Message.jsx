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
    ? "bg-blue-400 text-white  self-end rounded-tr"
    : "bg-gray-600 text-white  self-start rounded-tl";

  return (
    <div
      className={`p-2 px-3 rounded-xl my-1
        cursor-pointer
    ${chatStyle}
    `}
    >
      {msg.msg}
    </div>
  );
};

export default Message;
