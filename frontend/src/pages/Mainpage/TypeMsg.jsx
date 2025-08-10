import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessages";

//icons
import { IoSend } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { FaMicrophone, FaSmileWink } from "react-icons/fa";
import { LuSticker } from "react-icons/lu";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegSmileWink } from "react-icons/fa";

const TypeMsg = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    sendMessage(message);
    setMessage("");
  };
  return (
    <form
      className="px-4 my-3 w-full flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      {/* icons section ----------------------------- */}
      <div className="flex justify-center items-center">
        <div
          className=" w-10 h-10  rounded-full hover:bg-gray-200/40
        cursor-pointer flex items-center justify-center active:scale-90 transition-all
        duration-300 ease-in-out text-secondary"
        >
          <FaRegImage className="text-[1.2rem] " />
        </div>
        <div
          className=" w-10 h-10  rounded-full hover:bg-gray-200/40
        cursor-pointer flex items-center justify-center active:scale-90 transition-all
        duration-300 ease-in-out text-secondary"
        >
          <FaMicrophone className="text-[1.2rem] " />
        </div>
        <div
          className=" w-10 h-10  rounded-full hover:bg-gray-200/40
        cursor-pointer flex items-center justify-center active:scale-90 transition-all
        duration-300 ease-in-out text-secondary"
        >
          <LuSticker className="text-[1.3rem] " />
        </div>
        <div
          className=" w-10 h-10  rounded-full hover:bg-gray-200/40
        cursor-pointer flex items-center justify-center active:scale-90 transition-all
        duration-300 ease-in-out text-secondary"
        >
          <FaCirclePlus className="text-[1.2rem] " />
        </div>
      </div>

      {/* input box -------------------------------------- */}
      <div className="w-full relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message ..."
          className="input w-full rounded-3xl  bg-slate-950 
        focus:bg-slate-900 text-white pr-8
        "
        />
        <div
          className="absolute right-0 top-1 w-10 h-10  rounded-full hover:bg-gray-200/40
        cursor-pointer flex items-center justify-center active:scale-90 transition-all
        duration-300 ease-in-out text-secondary"
        >
          <FaSmileWink className="text-[1.5rem] " />
        </div>
      </div>
      {/* send button ------------------------------------ */}
      <button
        type="submit"
        className=" text-secondary hover:scale-110
          transition-all duration-300 ease-in-out
             items-center p-2 px-4 text-3xl
            "
      >
        <IoSend />
      </button>
    </form>
  );
};

export default TypeMsg;
