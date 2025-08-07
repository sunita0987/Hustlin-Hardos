import React from "react";
import Marquee from "react-fast-marquee";

const NavSlider = () => {
  return (
    <>
      <div className="py-[13px] bg-black w-full mx-auto flex max-w-[1920px]">
        <Marquee pauseOnHover>
          <div className="flex gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] xl:gap-[62px]">
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white  ff-noto  px-[4px] py-[3px]  leading-[100%]">
                S&P
              </p>
              <p className="border border-[#FF1300]  px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FF1300] m-0">
                -1.01%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white  ff-noto  px-[4px] py-[3px]  leading-[100%]">
                Shanghai
              </p>
              <p className="border border-[#FFD600]  px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.87%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white  ff-noto  px-[4px] py-[3px]  leading-[100%]">
                FTSE 100
              </p>
              <p className="border border-[#FFD600]  px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white  ff-noto  px-[4px] py-[3px]  leading-[100%]">
                ASD 100
              </p>
              <p className="border border-[#FFD600]  px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white  ff-noto ">Brent Crude Oil</p>
              <p className="border border-[#FF1300]  px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FF1300] m-0">
                -0.24%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white  ff-noto ">DSC</p>
              <p className="border border-[#FF1300]  px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FF1300] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white  ff-noto ">AXD 100</p>
              <p className="border border-[#FFD600]  px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white  ff-noto ">Euro/Dollar</p>
              <p className="border border-[#FFD600]  px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.03%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white  ff-noto ">S&P</p>
              <p className="border border-[#FF1300]  px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FF1300] m-0">
                -1.01%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white  ff-noto ">ASD 100</p>
              <p className="border border-[#FFD600]  px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default NavSlider;