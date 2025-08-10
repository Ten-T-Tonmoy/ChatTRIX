import React from "react";
import SideMenu from "../ListBoxLeft.jsx/SideMenu";
import MessageBox from "./MessageBox";

const Mainpage = () => {
  return (
    <div
      className="flex w-full justify-center rounded-lg overflow-hidden
       bg-gray-400 h-screen
    backdrop-blur-xl bg-clip-padding bg-opacity-0
    "
    >
      <MessageBox />
    </div>
  );
};

export default Mainpage;
