import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useGetConvoList = () => {
  const { authUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [convoList, setConvoList] = useState([]);
  const getConvoList = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://localhost:3000/api/sidebar?$userId=${authUser._id}`
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setConvoList(data);
    } catch (e) {
      console.error(e.message);
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  useState(() => {
    getConvoList();
  }, []);

  return { loading, convoList };
};

export default useGetConvoList;
