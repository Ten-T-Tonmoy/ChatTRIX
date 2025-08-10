import { useEffect } from "react";

import { useSocketContext } from "../context/socketContext";
import useConvo from "../zustand/useConvo";

//notif gotta add

const useWatchMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConvo();

  useEffect(() => {
    socket?.on("newMessage", (newMsg) => {
      newMsg.shouldShake = true;
      //extraa property add custom
      //manage notification and sound

      setMessages([...messages, newMsg]);
    });
  }, [socket, setMessages, messages]);
};

export default useWatchMessage;

//newMsg.msg is the message part
