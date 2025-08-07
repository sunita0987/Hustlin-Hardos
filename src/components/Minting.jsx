import React, { useState } from "react";
import CommonHeading from "../common/CommonHeading";
import CommonPara from "../common/CommonPara";
import BlueOutfit from "../assets/images/blue-outfit-img.png";
import CommonButton from "../common/CommonButton";
import { TRISTIQUE_DATA } from "../utils/helper";

const Minting = () => {
  const [count, setCount] = useState(100);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <>
      <div id="minting " className="bg-[#f6f1e2]">
        <div className="max-w-[1140px] px-3 xl:px-0 mx-auto py-10 sm:py-14 md:py-20 lg:py-[88.5px] bg-[#F6F1E2]">
          <CommonHeading
            HeadClass={"![text-shadow:2px_2px_4px_#00000040]"}
            HeadText={"Minting"}
          />
        </div>
        <div className="border-y-2 border-solid max-xl:px-3 border-[#000000]">
          <div className="max-w-[1140px] max-lg:border-none mx-auto border-x-2 border-solid border-[#000000]">
            <div className="w-full flex justify-center max-lg:flex-col max-lg:py-5 max-lg:gap-3 items-center bg-[#F6F1E2]">
              <div className="lg:max-w-[570px] px-[25px] max-lg:px-0 w-full">
                <div className="lg:max-w-[438px] ">
                  <CommonPara
                    ParaClass={"!leading-[140%] text-black"}
                    ParaText={
                      "Most of the Hustlin’ Hardos first experienced NFTs via other successful projects like NBA TopShot, where revealing your newly minted item invoked the same emotions as opening up that first pack of baseball cards. NFTs have allowed us to enjoy those feelings once again while also empowering communities through shared ownership. The space has seen incredible growth over the past year, and it is our belief that we are in the very early innings of the paradigm shift that will be powered by web3."
                    }
                  />
                  <div className="min-h-[49px] border-2 mt-[15px] border-solid flex border-[#000000] max-sm:max-w-[170px] max-w-[238px]">
                    <button
                      onClick={decrement}
                      className="text-4xl cursor-pointer max-md:text-3xl px-6 max-sm:px-3 max-sm:text-2xl pb-[5px] font-semibold"
                    >
                      -
                    </button>
                    <p className="min-w-[109px] max-sm:min-w-24 border-x-2 border-solid border-[#000000] flex justify-center items-center text-4xl max-md:text-3xl px-6 max-sm:px-4 max-sm:text-2xl font-semibold">
                      {count}
                    </p>
                    <button
                      onClick={increment}
                      className="text-4xl cursor-pointer max-md:text-3xl px-6 max-sm:px-3 max-sm:text-2xl font-semibold"
                    >
                      +
                    </button>
                  </div>
                </div>
                <CommonButton btnText={"Mint Now"} btnClass={"mt-[35px]"} />
                <p className="text-lg font-semibold leading-[100%] text-[#00A106] pt-9">
                  Time Left
                </p>
                <p className="text-4xl font-semibold leading-[100%] pt-2 text-[#FF0000]">
                  40:15:12:10
                </p>
              </div>
              <img
                src={BlueOutfit}
                alt="man-img"
                className="max-w-[570px] pointer-events-none max-lg:border-none max-lg:w-full border-l-2 border-solid border-[#000000]"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[832px] px-3 py-[21px] justify-between gap-5 sm:gap-7 lg:gap-10 items-center flex flex-wrap mx-auto bg-[#F6F1E2]">
          {TRISTIQUE_DATA.map((item, index) => (
            <div key={index} className="flex flex-col gap-3 flex-wrap">
              <p className="text-2xl leading-[111%]">{item}</p>
              <p className="text-4xl font-semibold leading-[111%]">42</p>
            </div>
          ))}
        </div>
        <div className="border-[1.5px]"></div>
      </div>
    </>
  );
};

export default Minting;
