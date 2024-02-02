import React from "react";
import Frame from "../../components/frame";
import mainLogo from "../../assets/svgs/frame.svg";
import { BOTTOM_LINKS, NAV_LINKS } from "../../components/navbar/nav_data";
import NavList from "../../components/navbar/navList";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";

function Home() {
  return (
    <div className="flex flex-col items-start justify-start bg-[#f1f4fad8] max-lg:h-screen">
      {/* Sidebar */}
      <div className="drawer lg:drawer-open flex-1 flex">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-start w-screen lg:hidden">
          {/* Page content here */}
          <Navbar />
          {/* Pages */}
          <div className="min-lg:hidden w-screen">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side overflow-x-hidden">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-64 max-sm:w-40 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex mx-10 max-md:mx-auto">
              <Frame image={mainLogo} text="Dashboard" />
            </div>
            {/* Main navigation links */}
            <div className="flex flex-col gap-10 h-[500px] w-full">
              <div className="flex-1 ">
                <NavList data={NAV_LINKS} />
              </div>
              {/* Login/Sign up section */}
              <div className="flex-none max-lg:hidden">
                <NavList data={BOTTOM_LINKS} />
              </div>
            </div>
          </ul>
        </div>
        <div className="max-lg:hidden w-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
