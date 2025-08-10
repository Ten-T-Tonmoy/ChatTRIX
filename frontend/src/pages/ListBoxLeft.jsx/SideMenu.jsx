import React from "react";
import Search from "../Mainpage/Search.jsx";
import ConvoList from "./ConvoList.jsx";

const SideMenu = () => {
  return (
    <div
      className="h-screen hidden
  border-r border-slate-500 px-4 py-4 sm:flex flex-col
  "
    >
      {/**not satisfied with sizing bruh */}
      <Search />
      <div className="divider px-3 "></div>
      <ConvoList />
    </div>
  );
};

export default SideMenu;
