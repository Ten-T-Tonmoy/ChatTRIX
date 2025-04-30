import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderBox";

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

  return (
    <div className="flex m-2 flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-secondary"> ChatShits</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full my-2 input input-bordered h-10"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Password again"
              className="w-full my-2  input input-bordered h-10"
            />
          </div>
          <h1 className="text-secondary text-[.9rem] m-3 font-[500]">
            Log in if you already have an acc.
          </h1>
          {/**login with button section no functionality for now */}

          <div className="flex justify-between mt-2">
            <button className="btn btn-outline rounded-full px-10  btn-secondary">
              Sign up
            </button>

            <Link to={"/login"}>
              <button className="btn btn-outline rounded-full px-10 btn-secondary">
                Log in?
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
