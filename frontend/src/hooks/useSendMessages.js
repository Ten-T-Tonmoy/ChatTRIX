import axios from "axios";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import { useState } from "react";
import useConvo from "../zustand/useConvo";

//selectedConvo and messages what zustand has

const useSendMessage = () => {
  const { authUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  //selectedCOnvo is just a user obj
  const { setMessages, messages, selectedConvo } = useConvo();

  const sendMessage = async (message) => {
    setLoading(true);

    try {
      const res = await axios.post(
        `/api/message/send/${selectedConvo._id}`,
        { msg: message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.error) {
        throw new Error(res.data.error);
      }

      setMessages([...messages, res.data]);
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
