import React from "react";
import SideMenu from "../ListBoxLeft.jsx/SideMenu";
import MessageBox from "./MessageBox";
import useConvo from "../../zustand/useConvo";

// glass effi here!?
const Mainpage = () => {
  const { selectedConvo } = useConvo();
  return (
    <div
      className={`flex w-full justify-center overflow-hidden
       bg-gray-400 h-screen
    backdrop-blur-xl bg-clip-padding bg-opacity-0
    `}
    >
      <MessageBox />
    </div>
  );
};

export default Mainpage;
