import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar1 from "../Shared/Navbar1";
import Footer from "../Shared/Footer";

const Main = () => {
  const location = useLocation();
  const { pathname } = location;

  const showNavbar1 = pathname !== "/login";
  const showNavbar2 = pathname !== "/registration";

  return (
    // <div>
    //   {showNavbar1 && <Navbar1 />}
    //   <Outlet />
    // { !showNavbar2 || !showNavbar1 || <Footer />}
    // </div>
    <div>
      {showNavbar1 && showNavbar2 && <Navbar1 />}
      <Outlet />
    { !showNavbar2 || !showNavbar1 || <Footer />}
    </div>
  );
};

export default Main;
