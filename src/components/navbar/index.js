import React from "react";
import { Link } from "react-router-dom";
import { MdNoAccounts } from "react-icons/md";
import menuIcon from "../../assets/svgs/menu-icon.svg";

const nav_links = [
  {
    id: 1,
    name: "Login",
    path: "/login",
  },
  {
    id: 2,
    name: "Sign Up",
    path: "/signup",
  },
];

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1 ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden m-3"
        >
          <img src={menuIcon} alt="menu-icon" className="w-6 h-6 " />
        </label>
        <h1 role="button" className="btn btn-ghost text-xl max-sm:hidden">
          Kirito Companies Ltd.
        </h1>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {/* Profile image */}
            <div className="w-10 h-max rounded-full bg-gray-300">
              <MdNoAccounts className="w-full h-full" />
            </div>
          </div>
          {/* List */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {nav_links.map((link) => (
              <li key={link.id} className="">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
