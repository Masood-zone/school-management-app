import React from "react";
import { Link } from "react-router-dom";

function AnalyticCard({ image, path, data, linkTitle }) {
  return (
    <div className="w-48 rounded-md h-max bg-[#d8e0ef] flex items-center gap-4 p-4 cursor-pointer">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
        <img src={image} alt="analytic-img" className="" />
      </div>
      <div className="flex flex-col items-center justify-start">
        <p className="font-bold hover:underline cursor-pointer text-sm">
          <Link to={path}>{linkTitle}</Link>
        </p>
        {linkTitle === "Payments" ? (
          <p className="text-3xl">
            {data ? `Gh₵${data}` : <p className="text-sm">No payments made</p>}
          </p>
        ) : (
          <p className="text-3xl">{data ? data.length : "35"}</p>
        )}
      </div>
    </div>
  );
}

export default AnalyticCard;
