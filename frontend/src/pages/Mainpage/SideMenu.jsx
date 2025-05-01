import React from "react";
import Search from "./Search.jsx";
import ConvoList from "./ConvoList.jsx";

const SideMenu = () => {
  return (
    <div
      className="
  border-r border-slate-500 px-4 py-4 flex flex-col
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
