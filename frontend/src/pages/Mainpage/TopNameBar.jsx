import React from "react";

const TopBar = ({ selectedConvo }) => {
  return (
    <div className=" text-center bg-slate-950 px-4 py-2">
      {/**top bar huh */}
      <span className="label-text">Sending To :</span>
      {"  "}
      <span
        className="
            text-gray-900 font-bold dark:text-gray-400
            "
      >
        {selectedConvo.fullname} {/**receiver name goes here */}
      </span>
    </div>
  );
};

export default TopBar;
