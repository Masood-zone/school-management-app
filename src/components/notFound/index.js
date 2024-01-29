import React from "react";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="max-w-md bg-base-200 h-max p-3 shadow-md m-auto rounded-lg mt-10">
      <p className="text-center">
        <Link to="/" className="underline hover:text-blue-400">
          Go Home
        </Link>
      </p>
      <div className="flex flex-col items-center justify-center my-4">
        <span className="block">
          <TbError404 fontSize={100} />
        </span>
        <p className="text-[#fc030b] text-xl">Page Not Found!</p>
      </div>
    </div>
  );
}

export default NotFoundPage;
