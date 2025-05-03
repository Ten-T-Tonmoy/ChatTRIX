import React from "react";
import SideMenu from "./SideMenu";
import MessageBox from "./MessageBox";

const Mainpage = () => {
  return (
    <div
      className="flex  md:w-full justify-center sm:h-[450px]
    md:h-[650px] rounded-lg overflow-hidden bg-gray-400
    backdrop-blur-xl bg-clip-padding bg-opacity-0
    "
    >
      <SideMenu />
      <MessageBox />
    </div>
  );
};

export default Mainpage;
