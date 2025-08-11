import React, { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import useWatchMessage from "../../hooks/useWatchMessage";
import { IoChatbubblesSharp } from "react-icons/io5";
import { useAuthContext } from "../../context/authContext";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useWatchMessage();
  const lastMsgRef = useRef();
  // console.log("The messages r here my man :",messages.messages)
  /**
   * tffff!
   *      messages
   *            messages,participants,createdAt,_id,updatedAt
   *                      msg,createdAt,receiverId,senderId,updatedAt,_id
   */

  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current.scrollTop = lastMsgRef.current.scrollHeight;
    }, 100);
  }, [messages]);
  return (
    <div
      className="w-full p-2 md:px-8 flex flex-col overflow-y-scroll
    h-[90%] scrollbar-hidden"
      ref={lastMsgRef}
    >
      {loading && (
        <div className="flex h-full items-center justify-center w-full">
          <div className="loading  loading-spinner h-7 text-white"></div>
        </div>
      )}
      {messages.length === 0 && !loading && <EmptyChat />}
      {messages?.map((msg, idx) => (
        <Message key={idx} msg={msg} />
      ))}
    </div>
  );
};

export default Messages;

const EmptyChat = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="
          px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold
          flex flex-col items-center gap-3
          "
      >
        <IoChatbubblesSharp className="text-[8rem] text-center" />

        <p className="text-xl">Be the first one to say Hi .</p>
      </div>
    </div>
  );
};
