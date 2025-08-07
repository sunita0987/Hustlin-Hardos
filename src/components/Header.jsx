import React, { useState } from "react";
import { Discord, Instagram, Medium, OpenSea, Twitter } from "../utils/icons";
import CommonButton from "../common/CommonButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["about us", "minting", "roadmap", "team", "faqs"];
  const socialLinks = [
    { href: "https://www.discord.com/", icon: <Discord /> },
    { href: "https://www.twitter.com/", icon: <Twitter /> },
    { href: "https://www.instagram.com/", icon: <Instagram /> },
    { href: "https://medium.com/", icon: <Medium /> },
    { href: "https://opensea.io/", icon: <OpenSea /> },
  ];

  if (menuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      <div className="py-2 bg-[#f6f1e2]">
        <div className="max-w-[1140px] w-full mx-auto max-xl:px-4 flex justify-end items-center ">
          <div className="max-w-[658px] w-full flex items-center justify-between">
            <a href="/" className="ff-moderfb text-2xl leading-[100%]">
              Hustlin' Hardos
            </a>
            <div
              id="menu"
              className={`flex gap-5 items-center transition-all duration-300 max-sm:z-40 max-sm:fixed max-sm:flex-col max-sm:w-full max-sm:h-full max-sm:justify-center max-sm:items-center max-sm:bg-cream max-sm:left-0 ${
                menuOpen ? "top-0  bg-[#F6F1E2]" : "-top-full"
              }`}
            >
              <div className="flex gap-[18px] max-sm:gap-4 items-center">
                {socialLinks.map(({ href, icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-6 justify-center items-center transition-transform duration-300 hover:scale-125"
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <div onClick={() => setMenuOpen(false)}>
                <CommonButton btnText="Connect Wallet" btnClass="ml-[20px]" />
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden relative z-50 overflow-hidden h-6 py-0.5 w-7 flex justify-between flex-col"
            >
              {["nav-line-1", "nav-line-2", "nav-line-3"].map((id, i) => (
                <span
                  key={id}
                  id={id}
                  className={`flex w-7 bg-[#000000] h-1 transition-all duration-300 rounded-md ${
                    i === 1
                      ? "relative after:absolute  after:w-full after:rounded-md after:h-full after:left-0 after:top-0 after:bg-[#000000] after:transition-all after:duration-300"
                      : ""
                  }`}
                ></span>
              ))}
            </button>
          </div>
        </div>
        <div className="w-full mt-[7px] border-t-2 border-b-2">
          <div className="max-w-[561px] flex justify-center items-center mx-auto">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="px-6 border-r-2 uppercase first:border-l-2 whitespace-nowrap hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-500 max-md:text-sm max-sm:text-xs py-[7px] max-sm:py-1 max-sm:px-2"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
