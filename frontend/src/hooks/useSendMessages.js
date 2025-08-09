import axios from "axios";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import { useState } from "react";
import useConvo from "../zustand/useConvo";

const { authUser } = useAuthContext();

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { setMessages, messages, selectedConvo } = useConvo();

  const sendMessage = async (message) => {
    setLoading(true);

    try {
      const res = axios.post(
        `/api/messages/send/${selectedConvo._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.error) {
        throw new Error(res.data.error);
      }

      setMessages([...messages,message]);
    //   setMessages([...messages,res.data]);

    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
