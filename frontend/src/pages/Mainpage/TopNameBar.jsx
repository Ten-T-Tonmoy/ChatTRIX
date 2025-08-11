import React from "react";
import useConvo from "../../zustand/useConvo";

//icons
import { IoArrowBack } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { MdInfo } from "react-icons/md";

const TopBar = ({ selectedConvo }) => {
  const { setSelectedConvo } = useConvo();
  const handleGoBack = () => {
    setSelectedConvo(null);
  };

  return (
    <div
      className=" text-center bg-slate-950t px-4 py-2 flex justify-between
    items-center border-b border-white/40 shadow-b-3xl shadow-gray-900 "
    >
      {/**back ------------------img------------------name------------------------- */}
      <div className="flex items-center justify-center gap-2">
        <div
          onClick={handleGoBack}
          className=" w-10 h-10  rounded-full hover:bg-gray-200/40
                cursor-pointer flex items-center justify-center active:scale-90 transition-all
                duration-300 ease-in-out text-secondary"
        >
          <IoArrowBack className="text-[1.5rem] " />
        </div>
        <img src={selectedConvo.profilePic} className="w-10" alt="" />
        <div
          className="
        text-white font-semibold
        "
        >
          {selectedConvo.fullname} {/**receiver name goes here */}
        </div>
      </div>

      {/* ----------------------------------------icons-------------------------------- */}
      <div className="flex items-center justify-center gap-1">
        <div
          className=" w-10 h-10  rounded-full hover:bg-gray-200/40
                cursor-pointer flex items-center justify-center active:scale-90 transition-all
                duration-300 ease-in-out text-secondary"
        >
          <IoCall className="text-[1.3rem] " />
        </div>
        <div
          className=" w-10 h-10  rounded-full hover:bg-gray-200/40
                cursor-pointer flex items-center justify-center active:scale-90 transition-all
                duration-300 ease-in-out text-secondary"
        >
          <IoVideocam className="text-[1.5rem] " />
        </div>
        <div
          className=" w-10 h-10  rounded-full hover:bg-gray-200/40
                cursor-pointer flex items-center justify-center active:scale-90 transition-all
                duration-300 ease-in-out text-secondary"
        >
          <MdInfo className="text-[1.4rem] " />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
