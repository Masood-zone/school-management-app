import React from "react";
import { Link } from "react-router-dom";
import { MdNoAccounts } from "react-icons/md";

const not_user_links = [
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

function Navbar(props) {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <h1 role="button" className="btn btn-ghost">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {not_user_links.map((link) => (
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
