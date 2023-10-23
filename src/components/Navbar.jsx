import React, { useEffect, useState } from "react";
import { navItem } from "../nav";
import logo from "../Assets/main-logo.svg";
import { Link } from "react-scroll";
import "./Navbar.css";
import { FaOutdent, FaXmark } from "react-icons/fa6";
import { Link as Links } from "react-router-dom";
const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center gap-8">
          <Links
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              className="w-[35px] h-[24px] inline-block items-center"
              src={logo}
              alt=""
            />{" "}
            <span className="text-[#263238] uppercase">Nexcent</span>
          </Links>
          <ul className="md:flex space-x-12 hidden">
            {navItem.map(({ link, path }) => (
              <Links
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer"
              >
                {link}
              </Links>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center ">
            <a
              href=""
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button className="btn">Sign up</button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:text-gray-500 text-neutralGrey"
            >
              {isMenu ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaOutdent className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-14 py-7 bg-brandPrimary ${
            isMenu ? "block fixed top-0 right-0 left-0 " : "hidden"
          }`}
        >
          {navItem.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-base text-black  hover:text-white first:font-medium cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
