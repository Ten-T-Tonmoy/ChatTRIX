import React from "react";
import useConvo from "../../zustand/useConvo";

const Convo = ({ convo }) => {
  const { selectedConvo, setSelectedConvo } = useConvo();
  const handleShit = (convo) => {
    setSelectedConvo(convo);
    // console.log(selectedConvo);
  };
  return (
    <div
      className="
  cursor-pointer hover:bg-slate-200/30 px-3 py-2
  "
      onClick={() => handleShit(convo)}
    >
      {convo?.fullname}
    </div>
  );
};

export default Convo;
