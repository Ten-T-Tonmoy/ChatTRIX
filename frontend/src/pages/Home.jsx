import React from "react";
import Mainpage from "./Mainpage/Mainpage";
import SideMenu from "./ListBoxLeft.jsx/SideMenu";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex">
      <SideMenu />
      <Mainpage />
    </div>
  );
};

export default Home;
