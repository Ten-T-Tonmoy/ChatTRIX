import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(data);
  };

  return <div>Signup</div>;
};

export default Signup;
