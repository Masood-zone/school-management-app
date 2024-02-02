import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="w-full h-56 mx-auto px-3 rounded-lg flex items-center justify-between gap-5  max-md:flex-col max-md:pt-4 max-md:gap-0">
      {/* Main info */}
      <div className="w-1/2 max-md:w-full">
        <h1 className="text-5xl py-3 font-bold">{props.title}</h1>
        <p className="text-lg">{props.notes}</p>
      </div>
      {/* Routes */}'
      <div className="bg-[#5715D1] text-white h-36 flex items-start justify-center flex-col p-5 rounded-lg max-md:w-full">
        <h2 className="font-bold text-xl">Access these pages</h2>
        <ul className="flex flex-col items-start text-right  w-full">
          {props.data.map((links) => (
            <li
              key={links.id}
              className="py-2 hover:text-blue-400 rounded underline"
            >
              <Link to={links.link} className="py-1 px-1">
                {links.path}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
