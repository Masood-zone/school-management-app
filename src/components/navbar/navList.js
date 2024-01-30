import React from "react";
import { NavLink } from "react-router-dom";

function NavList({ data }) {
  return (
    <ul className="flex flex-col items-start">
      {data.map((links) => (
        <NavLink
          to={links.path}
          className={({ isActive }) =>
            `py-2 my-2 rounded-md text-lg flex items-center gap-3 justify-start px-2 hover:bg-gray-300 w-full hover:cursor-pointer ${
              isActive ? "active" : ""
            }`
          }
          key={links.id}
        >
          <img src={links.icon} alt="icon" className="w-[35px]" />
          <p>{links.link}</p>
        </NavLink>
      ))}
    </ul>
  );
}

export default NavList;
