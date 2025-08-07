import React, { useState } from "react";
import CommonHeading from "../common/CommonHeading";
import { FAQ_DATA } from "../utils/helper";
import CommonPara from "../common/CommonPara";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div id="faqs">
        <div className="max-w-[1140px] px-3 xl:px-0 mx-auto py-10 sm:py-14 md:py-20 lg:py-[88.5px] bg-[#F6F1E2]">
          <div className="flex items-center justify-between">
            <CommonHeading
              HeadClass={
                "max-sm:!tracking-[-1px] ![text-shadow:2px_2px_4px_#00000040]"
              }
              HeadText={"Faqs"}
            />
          </div>
        </div>
        <div className="border-y-2 max-xl:px-4 border-solid border-black bg-[#F6F1E2]">
          <div className="max-w-[1140px] mx-auto container border-x-2 border-solid border-black">
            <div className="w-full">
              {FAQ_DATA.map((item, index) => (
                <div
                  key={index}
                  className={`border-b-2 border-black p-[15px] sm:px-[30px] sm:pt-6 sm:pb-[20px] md:pt-8 md:pb-10 md:pr-[44px] ${
                    openIndex === index ? "md:pb-[24px]" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full outline-0 cursor-pointer flex justify-between items-baseline text-start font-semibold text-black text-2xl max-md:text-xl max-sm:text-lg"
                  >
                    <span>{item}</span>
                    <span
                      className={`min-w-2 min-h-0.5 sm:min-w-0.5 sm:min-h-3 bg-black relative after:absolute after:w-full after:h-full after:bg-black after:rotate-90 after:transition-all after:duration-400  ${
                        openIndex === index ? "after:hidden sm:rotate-90" : ""
                      }`}
                    ></span>
                  </button>
                  <CommonPara
                    ParaClass={` leading-[150%] overflow-hidden transition-all duration-700 ease-in-out max-w-[992px] ${
                      openIndex === index
                        ? "max-h-[330px] pt-4 opacity-100"
                        : "max-h-0 pt-0 opacity-0"
                    }`}
                    ParaText={
                      "NFT stands for “Non-fungible token,” which means that it’s a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. Some NFT’s fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects. Think of it as a unique piece of art that can also work as a “members-only” card. Hustlin' Hardos works like this"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center ff-noto leading-[100%] pt-8 pb-6 bg-[#F6F1E2]">
        © Hustlin' Hardos {new Date().getFullYear()}
      </div>
    </>
  );
};

export default Faq;
