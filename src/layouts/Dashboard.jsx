import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/image/logo/logo.png";
import { FaBars, FaCartShopping, FaX } from "react-icons/fa6";
const Dashboard = () => {
  const location = useLocation();
  const [menu, setMenu] = useState();
  //   handleOpenMenu ==================
  const handleOpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:flex bg-white">
      <div className="w-[20%] md:flex hidden bg-white  h-[100vh] md:p-12 p-8">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-[150px]" />
          </Link>
          <div className="md:mt-14">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/dashboard/buy"
                  isActive={() => location.pathname === "/dashboard/buy"}
                  className={`flex items-center text-2xl gap-4 ${
                    location.pathname === "/dashboard/buy"
                      ? "active text-red-600  font-normal"
                      : "text-dashboardTextColor"
                  }`}
                >
                  <FaCartShopping size={26} />
                  Buy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookingList"
                  isActive={() =>
                    location.pathname === "/dashboard/bookingList"
                  }
                  className={`flex items-center text-2xl gap-4 ${
                    location.pathname === "/dashboard/bookingList"
                      ? "active text-red-600  font-normal"
                      : "text-dashboardTextColor"
                  }`}
                >
                  <FaCartShopping size={26} />
                  Booking List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/review"
                  isActive={() => location.pathname === "/dashboard/review"}
                  className={`flex items-center text-2xl gap-4 ${
                    location.pathname === "/dashboard/review"
                      ? "active text-red-600  font-normal"
                      : "text-dashboardTextColor"
                  }`}
                >
                  <FaCartShopping size={26} />
                  Review
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* content part ================= */}
      <div className="md:w-[90%] w-full  bg-green-500 h-[100vh] md:p-12 p-8">
        {/* for mobile devices bar responsive ================ */}
        <div className="lg:hidden flex items-center justify-end cursor-pointer relative">
          <span className="absolute top-0" onClick={handleOpenMenu}>
            {menu ? <FaX /> : <FaBars />}
          </span>
        </div>
        <Outlet />

        {menu && (
          <div className="bg-white p-4 mt-4 w-[60%] h-[90vh]">
            Lorem ipsum dolor sit amet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
