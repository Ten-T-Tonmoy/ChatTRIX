import React from "react";
import useConvo from "../../zustand/useConvo";

const Convo = ({ convo }) => {
  const { selectedConvo, setSelectedConvo } = useConvo();
  return (
    <div
      className="
  cursor-pointer hover:bg-slate-200/30 px-3 py-2
  "
      onClick={() => setSelectedConvo(convo)}
    >
      {convo?.fullname}
    </div>
  );
};

export default Convo;
