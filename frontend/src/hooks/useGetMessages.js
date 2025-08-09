import { useEffect, useState } from "react";
import useConvo from "../zustand/useConvo";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConvo } = useConvo();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConvo._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setMessages(data);
      } catch (err) {
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
