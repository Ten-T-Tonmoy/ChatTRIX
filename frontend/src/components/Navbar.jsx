import React from "react";
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../context/authContext";

/**
 * functionalities to add
 * search find
 * get user pfp
 * add icon of Chat
 * do profile,setting,logout shits
 */

const Navbar = () => {
  const { authUser } = useAuthContext();
  const { logout, loading } = useLogout();
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">📮ChatShits</a>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search Friends"
            className="input bg-slate-900 
          focus:bg-slate-800 input-bordered w-24  md:w-auto rounded-full "
          />
          <div className="dropdown dropdown-end z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {authUser ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={authUser.profilePic}
                  />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
