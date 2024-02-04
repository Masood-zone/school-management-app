import React from "react";
import adminImg from "../../assets/svgs/admin.svg";
import logoutImg from "../../assets/svgs/logout.svg";

function AdminDetails({ adminDetails, handleLogout }) {
  return (
    <div className="w-[85%] h-max">
      <div className="flex flex-col items-start gap-3 py-3 px-1">
        {/* Admin Name */}
        <div className="flex gap-2">
          <img src={adminImg} className="w-10 h-10" alt="Admin logo" />
          <p className="font-bold text-sm">
            Welcome
            <span className="font-light block">
              {adminDetails ? adminDetails.fullName : ""}
            </span>
          </p>
        </div>
        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="flex items-center w-max  p-1 bg-red-600 text-white rounded"
        >
          <img src={logoutImg} alt="Logout button" className="w-7 h-7" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDetails;
