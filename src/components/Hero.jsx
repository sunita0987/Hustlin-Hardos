import React from "react";
import BackToTop from "../common/BackToTop";
import HeroImg from "../assets/images/hero-img.png";
const Hero = () => {
  return (
    <>
      <div>
        <div className="max-w-[1140px] mx-auto px-4 bg-[#F6F1E2]">
          <BackToTop />
          <h1 className="ff-moderfb [text-shadow:2px_2px_4px_#00000040] xl:text-[157px] md:text-8xl sm:text-6xl whitespace-nowrap py-5 max-lg:py-4 max-md:py-3 max-sm:py-2 text-center text-4xl leading-[100%] text-black">
            THE HUSTLIN’ HARDOS.
          </h1>
        </div>
        <div className="border-t-2">
          <img
            className="object-cover w-full h-full  max-h-[476px]"
            src={HeroImg}
            alt="hero-img"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
