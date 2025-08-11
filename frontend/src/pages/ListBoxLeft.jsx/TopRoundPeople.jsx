import React from "react";
import useGetConvoList from "../../hooks/useGetConvoList.js";

const TopRoundPeople = () => {
  const { loading, convoList } = useGetConvoList();

  return (
    <div className="w-full  flex gap-2 overflow-x-scroll border-b border-white/30 pb-1 scrollbar-hidden">
      {loading && (
        <div className="flex items-center justify-center w-full">
          <div className="loading  loading-spinner h-7 text-white"></div>
        </div>
      )}
      {convoList.map((convo, idx) => (
        <div key={idx} className=" relative flex flex-col items-center">
          <img
            src={convo.profilePic}
            loading="lazy"
            className="w-12 cursor-pointer
          "
            alt=""
          />
          <h1 className="whitespace-nowrap max-w-16 truncate">
            {convo.fullname}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default TopRoundPeople;
