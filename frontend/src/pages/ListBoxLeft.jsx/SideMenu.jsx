import React from "react";
import Search from "./Search.jsx";
import ConvoList from "./ConvoList.jsx";
import useConvo from "../../zustand/useConvo.js";

// icon
import { FaRegEdit } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

// bottom footer
import { IoChatbubbleSharp } from "react-icons/io5";
import { MdAmpStories } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import TopRoundPeople from "./TopRoundPeople.jsx";

/**
 * top heading =fixed
 * round people
 * list
 *    face name
 *    ---- last message
 * bottom bar =fixed
 */

const SideMenu = () => {
  const { selectedConvo } = useConvo();
  return (
    <div
      className={`h-screen relative md:w-[50%]  w-full 
  border-r border-slate-500 sm:flex flex-col
    backdrop-blur-3xl bg-clip-padding bg-opacity-0
  ${!selectedConvo ? "flex" : "hidden"}
  `}
    >
      <TopHeader />
      {/**not satisfied with sizing bruh */}
      <div className="overflow-y-scroll px-4  h-full scrollbar-hidden">
        <Search />
        <TopRoundPeople />
        <ConvoList />
        {/* <div className="divider px-3  "></div> */}
      </div>
      <BottomBar />
    </div>
  );
};

export default SideMenu;

// --------------------------TopHeader-------------------------------------
const TopHeader = () => {
  return (
    <div
      className="w-full sticky px-4  border-b border-white/50 top-0 flex py-2 justify-between
     items-center "
    >
      <h1
        className="font-bold text-white 
  text-2xl"
      >
        ChatTriX
      </h1>
      <div className="flex justify-center items-center">
        <div
          className=" w-10 h-10  rounded-full hover:bg-gray-200/40
                        cursor-pointer flex items-center justify-center active:scale-90 transition-all
                        duration-300 ease-in-out text-white "
        >
          <FaRegEdit className="text-[1.3rem] " />
        </div>
        <div
          className=" w-10 h-10  rounded-full hover:bg-gray-200/40
                        cursor-pointer flex items-center justify-center active:scale-90 transition-all
                        duration-300 ease-in-out text-white "
        >
          <IoMdSettings className="text-[1.5rem] " />
        </div>
      </div>
    </div>
  );
};

//-----------------------------BOttom Footer----------------------------------

const BottomBar = () => {
  return (
    <div className="flex  items-center justify-around border-t border-white/30 w-full">
      <div
        className=" w-full h-14   hover:bg-gray-200/40 hover:text-secondary
                        cursor-pointer flex items-center justify-center active:scale-90 transition-all
                        duration-300 ease-in-out text-white "
      >
        <IoChatbubbleSharp className="text-[1.5rem] " />
      </div>
      <div
        className=" w-full h-14   hover:bg-gray-200/40 hover:text-secondary
                        cursor-pointer flex items-center justify-center active:scale-90 transition-all
                        duration-300 ease-in-out text-white "
      >
        <MdAmpStories className="text-[1.7rem] " />
      </div>
      <div
        className=" w-full h-14   hover:bg-gray-200/40 hover:text-secondary
                        cursor-pointer flex items-center justify-center active:scale-90 transition-all
                        duration-300 ease-in-out text-white "
      >
        <IoIosNotifications className="text-[1.7rem] " />
      </div>
      <div
        className=" w-full h-14   hover:bg-gray-200/40 hover:text-secondary
                        cursor-pointer flex items-center justify-center active:scale-90 transition-all
                        duration-300 ease-in-out text-white "
      >
        <IoMenu className="text-[1.8rem] " />
      </div>
    </div>
  );
};
