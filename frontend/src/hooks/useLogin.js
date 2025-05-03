import toast from "react-hot-toast";

import { useAuthContext } from "../context/authContext";
import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  //take a lesson u dont need to make whole shit async
  const login = async (username, password) => {
    const allGood = allOk(username, password);
    if (!allGood) return;
    setLoading(true);

    try {
      const res = await axios.post(
        "/api/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data?.error) throw new Error(res.data.error);

      localStorage.setItem("chatter", JSON.stringify(res.data));
      setAuthUser(res.data);
      toast.success("Login successfull! ");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
      //well its weird but ahem
    }
  };

  return { loading, login };
};

export default useLogin;

function allOk(username, password) {
  if (!username || !password) {
    toast.error("All fields must be filled properly!");
    return false;
  }

  return true;
}
