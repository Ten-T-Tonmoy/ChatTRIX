import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessages";

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
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message ..."
          className="input w-[85%] input-bordered bg-slate-800 
          focus:bg-slate-700
          rounded-md"
        />
        <button
          type="submit"
          className=" text-secondary hover:scale-110
          hover:-rotate-45 transition-transform duration-300 ease-linear
            absolute items-center p-2 text-4xl
            "
        >
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default TypeMsg;
