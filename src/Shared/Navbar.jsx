import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import logo from "../assets/image/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const navLinks = [
  { path: "/home", display: "Home home" },
  { path: "/portfolio", display: "Our Portfolio" },
  { path: "/team", display: "Our Team" },
  { path: "/contact", display: "Contact Us" },
];

const Navbar = () => {
  const [header, setHeader] = useState(false);
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
    <Container>
      <header className={header?'fixed bg-[green] w-[100%]':'bg-transparent'}>
        <div className="flex items-center justify-between">
          {/* logo =============== */}
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {/* menu================ */}
          <div className="flex navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex menu items-center justify-between gap-8">
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
              <Link to='/login'>
                <button className="btn w-[134px] h-[45px]">Login</button>
              </Link>
            </ul>
          </div>
          <span className="md:hidden " onClick={toggleMenu}>
            <FaBars className="w-6 h-6 cursor-pointer text-red-400" />
          </span>
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
