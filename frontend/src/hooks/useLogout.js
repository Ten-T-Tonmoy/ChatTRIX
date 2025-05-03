import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      //ok post req doesnt necesessarily always need to have a body
      const res = await axios.post("/api/auth/logout");
      if (res.data?.error) {
        throw new Error(res.data.error);
      }

      localStorage.removeItem("chatter");
      setAuthUser(null);
      toast.success("Successfully logged out!");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
