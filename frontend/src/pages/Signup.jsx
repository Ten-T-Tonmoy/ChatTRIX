import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderBox";
import useSignup from "../hooks/useSignup.js";

const Signup = () => {
  const { signup } = useSignup();
  const [data, setData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleGenderBox = (gender) => {
    setData({ ...data, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    await signup(data);
  };

  return (
    <div
      className="flex m-2 h-screen flex-col items-center justify-center 
    min-w-96 mx-auto"
    >
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400
       bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-secondary font-bold"> ChatTrix</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              value={data.fullname}
              onChange={(e) => setData({ ...data, fullname: e.target.value })}
              placeholder="Enter Fullname"
              className="w-full bg-secondary/15 input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              placeholder="Enter username"
              className="w-full bg-secondary/15 input input-bordered h-10"
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleGenderBox}
            genderSelected={data.gender}
          />
          <div>
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Enter Password"
              className="w-full bg-secondary/15 my-2 input input-bordered h-10"
            />
          </div>
          <div>
            <input
              type="password"
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
              placeholder="Enter Password again"
              className="w-full bg-secondary/15 my-2  input input-bordered h-10"
            />
          </div>
          <h1 className="text-secondary text-[.9rem] m-3 font-[500]">
            Already have an Account ? Log in then .
          </h1>
          {/**login with button section no functionality for now */}

          <div className="flex justify-between mt-2">
            <button
              type="submit"
              className="btn text-white rounded-full px-10  btn-secondary"
            >
              Sign up
            </button>

            <Link to={"/login"}>
              <button
                className="btn btn-outline hover:text-white border-secondary text-secondary 
              hover:bg-secondary hover:border-secondary rounded-full px-10 "
              >
                Log in ?
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
