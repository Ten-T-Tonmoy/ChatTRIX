import React, { useState } from "react";
import useConvo from "../../zustand/useConvo";

import { IoCall } from "react-icons/io5";

const Convo = ({ convo }) => {
  const { selectedConvo, setSelectedConvo } = useConvo();
  const [lastMsg, setLastMsg] = useState("Let's start a new conversation .");
  const handleShit = (convo) => {
    setSelectedConvo(convo);
    // console.log(selectedConvo);
  };
  return (
    <div
      className=" w-full flex items-center gap-2 relative
  cursor-pointer hover:bg-slate-200/30 px-2 py-2 transition-all
  active:scale-90
  "
      onClick={() => handleShit(convo)}
    >
      {/**
       * img name
       *     msg   time
       */}
      <img src={convo.profilePic} className="w-10" alt="" />

      <div className="flex flex-col  justify-start items-start ">
        <h1 className="text-white">{convo?.fullname}</h1>
        <h1>{lastMsg}</h1>
      </div>
      <div
        className=" w-10 h-10  rounded-full absolute right-2  hover:bg-gray-200/40
                        cursor-pointer flex items-center justify-center active:scale-90 transition-all
                        duration-300 ease-in-out text-white "
      >
        <IoCall className="text-[1.3rem] scale-x-[-1]" />
      </div>
    </div>
  );
};

export default Convo;
