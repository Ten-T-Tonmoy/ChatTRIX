import { useEffect } from "react";

import { useSocketContext } from "../context/socketContext";
import useConvo from "../zustand/useConvo";

//notif gotta add

const useWatchMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConvo();




};



export default useWatchMessage;