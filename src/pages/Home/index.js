import React from "react";
import Frame from "../../components/frame";
import mainLogo from "../../assets/svgs/frame.svg";
import { NAV_LINKS } from "../../components/navbar/nav_data";
import NavList from "../../components/navbar/navList";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../appRedux/slice/admins/adminSlice";
import AdminDetails from "../../components/details/adminDetails";

function Home() {
  const dispactch = useDispatch();
  const { isAuthenticated, adminDetails } = useSelector(
    (state) => state.admins
  );
  const handleLogout = () => {
    dispactch(reset());
  };

  return (
    <div className="flex flex-col items-start justify-start max-lg:h-screen">
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
        {/* Sidebar here */}
        <div className="drawer-side overflow-x-hidden">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar content here */}
          <ul className="menu w-64 max-sm:w-40 min-h-full bg-base-200 text-base-content">
            <div className="flex mx-10 max-md:mx-auto">
              <Frame image={mainLogo} text="Dashboard" />
            </div>
            {/* Main navigation links */}
            <div className="flex flex-col gap-10 h-[500px] w-full">
              <div className="flex-1 ">
                <NavList data={NAV_LINKS} />
              </div>
              {/* Login/Sign up section */}
              <div className="flex-none">
                {isAuthenticated ? (
                  // Admin details section
                  <AdminDetails
                    adminDetails={adminDetails}
                    handleLogout={handleLogout}
                  />
                ) : (
                  ""
                )}
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
