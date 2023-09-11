import { useState } from "react";

import { close, donuticon, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-end items-center navbar">    
      {/* upper left icon */}
      <img src={donuticon} alt="icon" className="w-[80px] h-[80px] rounded-2xl" />
      {/* <h1 className="flex-1 absolute font-poppins font-semibold ss:text-[30px] text-[24px] 
        text-white ss:leading-[24px] leading-[24px] z-[5] left-0"
        style={{ left: '98px', top: '39px' }}>
          RZ
      </h1> */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mt-5">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[25px] 
            ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-20"}
            `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

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
                className={`font-latinka font-medium cursor-pointer text-[18px] ${
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