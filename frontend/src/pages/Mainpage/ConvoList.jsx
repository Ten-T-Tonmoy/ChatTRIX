import React from "react";
import Convo from "./Convo.jsx";
import { randomEmoji } from "../../utils/emojiGenerator.js";
import useGetConvoList from "../../hooks/useGetConvoList.js";

const ConvoList = () => {
  const { loading, convoList } = useGetConvoList();
  console.log(convoList);
  return <div>{convoList}</div>;
};

export default ConvoList;
