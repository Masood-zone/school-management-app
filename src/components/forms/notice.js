import React from "react";
import { Link } from "react-router-dom";

function Notice({ message, link, title }) {
  return (
    <p className="">
      <span className="font-medium">{message}</span>
      <Link className="text-[#3A36DB] font-bold px-2" to={link}>
        {title}
      </Link>
    </p>
  );
}

export default Notice;
