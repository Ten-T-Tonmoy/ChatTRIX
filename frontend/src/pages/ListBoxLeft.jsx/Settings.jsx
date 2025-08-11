import React from "react";

import useLogout from "../../hooks/useLogout";

//icons
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const SettingPopUp = ({ isOpen, setIsOpen }) => {
  const { logout, loading } = useLogout();

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-screen items-center flex justify-center
      w-screen bg-black  bg-opacity-[70%] z-10"
        >
          <div
            className=" left-[25vw] md:left-[42vw] w-72 bg-gray-200 border
        border-gray-700 rounded-xl shadow-lg font-bold text-[1rem] py-2 z-50 "
          >
            <button
              className="w-full text-left px-4 py-3 hover:bg-black/20 hover:text-red-500
                          cursor-pointer transition-colors duration-200 flex items-center justify-between"
              onClick={() => setIsOpen(!isOpen)}
            >
              Close
              <IoMdClose className="text-[1.5rem]" />
            </button>
            <button
              className="w-full text-left px-4 py-3 hover:bg-black/20 text-black
                          cursor-pointer transition-colors duration-200 flex items-center justify-between"
            >
              Profile
              <FaUserCircle className="text-[1.5rem]" />
            </button>
            <button
              className="w-full text-left px-4 py-3 hover:bg-black/20 text-black
                          cursor-pointer transition-colors duration-200 flex items-center justify-between"
            >
              Color Theme
              <IoMdColorPalette className="text-[1.5rem]" />
            </button>
            {/**------------logOut part------------------------ */}
            <button
              onClick={logout}
              className="w-full text-left px-4 py-3 hover:bg-black/20 hover:text-red-500 text-black
                          cursor-pointer transition-colors duration-200 flex items-center justify-between"
            >
              Log Out
              <MdOutlineLogout className="text-[1.5rem]" />
            </button>

            <button
              className="w-full text-left px-4 py-3 text-red-500 flex items-center justify-between
                          cursor-pointer hover:bg-red-400/30 transition-colors duration-200"
            >
              Delete profile
              <MdDelete className="text-[1.4rem]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingPopUp;
