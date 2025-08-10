import React, { useEffect } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import useWatchMessage from "../../hooks/useWatchMessage";

const Messages = () => {
  const { messages, loading } = useGetMessages();

  useWatchMessage();
  // console.log("The messages r here my man :",messages.messages)
  /**
   * tffff!
   *      messages
   *            messages,participants,createdAt,_id,updatedAt
   *                      msg,createdAt,receiverId,senderId,updatedAt,_id
   */

  return (
    <div
      className="w-full px-2 flex flex-col overflow-y-scroll
    h-[90%] scrollbar-hidden"
    >
      {messages?.map((msg, idx) => (
        <Message key={idx} msg={msg} />
      ))}
    </div>
  );
};

export default Messages;
