import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const Search = () => {
  return (
    <form className="flex gap-1">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered bg-secondary/15 rounded-full"
      />
      <button
        type="submit"
        className="btn  btn-circle relative  bg-secondary/40 hover:bg-secondary text-white"
      >
        <IoSearchSharp className="w-6  h-6 outline-none" />
      </button>
    </form>
  );
};

export default Search;
