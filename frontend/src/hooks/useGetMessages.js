import { useEffect, useState } from "react";
import useConvo from "../zustand/useConvo";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConvo } = useConvo();
  // console.log("selected convo hook check", selectedConvo);
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/message/${selectedConvo._id}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data === null) {
          // console.log("no msg bro look :", data);
          setMessages([]);
          return;
        }
        if (data.error) throw new Error(data.error);
        setMessages(data.messages);
        // console.log("the messages are :", data);
      } catch (err) {
        console.error(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConvo?._id) getMessages();
  }, [selectedConvo?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
