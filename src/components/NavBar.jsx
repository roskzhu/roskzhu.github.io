import { useState } from "react";
import Fade from 'react-reveal/Fade';
import { close, logoR, menu } from "../assets";
import { navLinks } from "../constants";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 items-center navbar">    
      {/* upper left icon */}
      {/* <img src={logoR} alt="icon" className="w-[80px] h-[80px] rounded-3xl" /> */}
      {/* <div className="flex items-center ml-25"> */}
      <Fade>
        <h1 className="flex-1 justify-start stroke absolute font-poppins font-semibold ss:text-[28px] text-[24px]  
          text-dimWhite ss:leading-[50px] leading-[150px] z-[5] rounded-2xl mt-5 left-20"
          >
            Rosanne.
        </h1>
      </Fade>
      <Fade>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mt-5">
      
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[17px] 
            ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-20"}
            `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      </Fade>
      {/* </div> */}
      {/* mobile devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-40 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-center items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-semibold cursor-pointer text-[11px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;