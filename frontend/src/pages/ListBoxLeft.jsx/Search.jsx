import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const Search = () => {
  return (
    <div className="flex gap-3 py-2 items-center justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-[80%] sm:w-[60%] h-9 px-8  placeholder:text-white/50 bg-stone-800 
         rounded-full outline-none text-white"
      />
      <button
        className="rounded-full p-2  relative  bg-secondary/40 bg-secondary hover:bg-opacity-60 
        cursor-pointer ease-in-out transition-all duration-300 hover:scale-105
        active:scale-95 text-white"
      >
        <IoSearchSharp className="w-6  h-6 outline-none" />
      </button>
    </div>
  );
};

export default Search;
