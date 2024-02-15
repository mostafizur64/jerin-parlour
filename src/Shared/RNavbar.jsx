import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/image/logo/logo.png";
import { FaBars } from "react-icons/fa6";
import { AuthContext } from "../page/Providers/AuthProvider";
const navLinks = [
  { path: "/", display: "Home " },
  { path: "/about", display: "About Us" },
  { path: "/project", display: "Project" },
  { path: "/contact", display: "Contact" },
  { path: "/admin", display: "Admin" },
];
const RNavbar = () => {
  const [header, setHeader] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <div>
      <div className="header flex w-[100%] justify-between m-auto ">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="flex menu items-center justify-between gap-20">
            {navLinks.map((nav, index) => (
              <li key={index}>
                <NavLink
                  to={nav.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-[#474747] text-[16px] leading-7 font-[600]"
                      : "text-[#000000] text-[16px] leading-7 hover:text-[red]"
                  }
                >
                  {nav.display}
                </NavLink>
              </li>
            ))}
            <div className="md:hidden flex">
              <Link to="/login">
                <button className="btn w-[134px] h-[45px]">Login</button>
              </Link>
            </div>
          </ul>
        </div>
        <div className="md:flex hidden">
          {user ? (
            <>
              <span></span>
              <button onClick={handleLogout} className="btn w-[134px] h-[45px]">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn w-[134px] h-[45px]">Login</button>
              </Link>
            </>
          )}
        </div>
        <span className="md:hidden " onClick={toggleMenu}>
          <FaBars className="w-6 h-6 cursor-pointer text-red-400" />
        </span>
      </div>
    </div>
  );
};

export default RNavbar;
