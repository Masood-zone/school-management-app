import React from "react";

function Frame({ image, text }) {
  return (
    <div className="w-[90px] flex flex-col justify-center items-center gap-2 mb-10">
      <img src={image} className="w-full" alt="Frame" />
      <p className="font-bold text-lg">{text}</p>
    </div>
  );
}

export default Frame;
