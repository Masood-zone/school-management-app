import React from "react";
import { Link } from "react-router-dom";

function Frame({ image, text }) {
  return (
    <div className="w-[90px] flex flex-col justify-center items-center gap-2 mb-10">
      <img src={image} className="w-full" alt="Frame" />
      <Link to="/" className="font-bold text-lg">
        {text}
      </Link>
    </div>
  );
}

export default Frame;
