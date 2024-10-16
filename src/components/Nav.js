import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-4 w-full z-50">
      {/* Контейнер навигации */}
      <div className="w-full bg-black/20 h-[80px] backdrop-blur-lg rounded-full max-w-[360px] md:max-w-[460px] mx-auto px-4 flex justify-between items-center text-xl md:text-2xl text-white/50">
        <Link
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full hover:text-white transition-colors duration-300"
        >
          <BiHomeAlt className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
        <Link
          to="about"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full hover:text-white transition-colors duration-300"
        >
          <BiUser className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
        <Link
          to="service"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full hover:text-white transition-colors duration-300"
        >
          <BsClipboardData className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
        <Link
          to="work"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full hover:text-white transition-colors duration-300"
        >
          <BsBriefcase className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
        <Link
          to="contact"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full hover:text-white transition-colors duration-300"
        >
          <BsChatSquareText className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
