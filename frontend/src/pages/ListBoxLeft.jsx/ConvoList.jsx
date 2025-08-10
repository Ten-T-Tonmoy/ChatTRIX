import React from "react";
import Convo from "./Convo.jsx";
import { randomEmoji } from "../../utils/emojiGenerator.js";
import useGetConvoList from "../../hooks/useGetConvoList.js";

const ConvoList = () => {
  const { loading, convoList } = useGetConvoList();
  // console.log("frickin list huh", convoList);
  return (
    <div>
      {convoList.map((convo, idx) => (
        <Convo key={convo._id} convo={convo}></Convo>
      ))}
    </div>
  );
};

export default ConvoList;

/**
 * passdown
 * convo (el)
 * emoji (random)
 *
 */
