import React from "react";
import Frame from "../../components/frame";
import mainLogo from "../../assets/svgs/frame.svg";
import { NAV_LINKS } from "../../components/navbar/nav_data";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex items-start justify-start bg-[#F1F4FA] ">
      {/* Dashboard */}
      <div className="flex-1 bg-white w-[228px] border-2 border-gray-400 h-screen justify-center items-center px-5">
        <Frame image={mainLogo} text="Dashboard" />
        <ul className="flex flex-col items-start ">
          {NAV_LINKS.map((links) => (
            <li className="py-2 " key={links.id}>
              <Link to={links.path}>{links.link}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-none"></div>
    </div>
  );
}

export default Dashboard;
