import React from "react";
import Convo from "./Convo.jsx";
import { randomEmoji } from "../../utils/emojiGenerator.js";
import useGetConvoList from "../../hooks/useGetConvoList.js";

const ConvoList = () => {
  const { loading, convoList } = useGetConvoList();
  console.log(convoList);
  return (
    <div>
      {convoList.map((el) => (
        <div>{el.fullname}</div>
      ))}{" "}
    </div>
  );
};

export default ConvoList;
