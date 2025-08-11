import React, { useState } from "react";
import useConvo from "../../zustand/useConvo.js";
import { useAuthContext } from "../../context/authContext";
import { TiMessages } from "react-icons/ti";
import Messages from "./Messages.jsx";
import TypeMsg from "./TypeMsg.jsx";
import TopBar from "./TopNameBar.jsx";

/**
 *header
 *Messages
 * Msg inputs on bottom shit
 */

const MessageBox = () => {
  const { selectedConvo, setSelectedConvo } = useConvo();
  // console.log("convo selected", selectedConvo);

  useState(() => {
    //just need to cleanup shits
    return () => setSelectedConvo(null);
  }, [setSelectedConvo]);
  return (
    <div className="w-full flex flex-col ">
      {/**change this later to tweak shits */}
      {!selectedConvo ? (
        <UnselectedChat />
      ) : (
        <>
          <TopBar selectedConvo={selectedConvo} />
          <Messages />
          <TypeMsg />
        </>
      )}
    </div>
  );
};

export default MessageBox;

//------------------------------------unselected Chat-------------------------------------------

const UnselectedChat = () => {
  const { authUser } = useAuthContext();
  //extraa careful must be func call or undefined
  // console.log(authUser);

  return (
    <div className="hidden sm:flex items-center justify-center w-full h-full">
      <div
        className="
      px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold
      flex flex-col items-center gap-3
      "
      >
        <TiMessages className="text-[5rem] md:text-6xl text-center" />
        <p>
          Hi there 👋 {authUser.fullname} {/**yep authUser here */}
        </p>
        <p>Select someone to start yapping!</p>
      </div>
    </div>
  );
};

// -------------------------------TopBar-------------------------------------------------------
