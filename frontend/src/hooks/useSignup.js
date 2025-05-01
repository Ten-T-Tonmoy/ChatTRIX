import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signUp = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const allOk = errorHandler({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!allOk) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "/api/auth/signup",
        {
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function errorHandler({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("All fields aren't filled properly !");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match bro!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Too smol Password man!");
    return false;
  }

  return true;
}
