import React from "react";
import BlueOutfitCartoon from "../assets/images/blue-outfit-img.png";
import CommonPara from "../common/CommonPara";

const BreakingNews = () => {
  return (
    <>
      <div className="border-y-2 bg-[#f6f1e2]" id="about us">
        <div className="max-xl:px-4 border-b-2">
          <p className="max-w-[1140px] mx-auto [text-shadow:2px_2px_4px_#00000040] xl:text-[72px] ff-noto md:text-5xl sm:text-4xl text-4xl !leading-[140%] lg:py-16 md:py-12 py-8">
            “BREAKING NEWS: Hustlin Hardos set to launch the most anticipated
            NFT project of 2022"
          </p>
        </div>
        <div className="max-w-[1140px] mx-auto border-solid max-xl:px-3 border-black">
          <div className="flex flex-wrap justify-center border-l-2 border-r-2">
            <div className="w-full lg:w-1/2">
              <div className="py-[86px] pl-11 h-full lg:pr-[52px] border-r-2 max-lg:border-r-0 max-lg:py-[45px] max-lg:px-[25px] max-sm:p-5">
                <CommonPara
                  ParaText="March 1, 2022 by Editor Hardo"
                  ParaClass="pb-4"
                />
                <p className="font-normal text-sm md:text-lg max-w-[475px] max-lg:max-w-[unset]"></p>
                <CommonPara
                  ParaClass="pb-4 !text-[18px] !leading-[150%] ff-noto"
                  ParaText="Hustlin' Hardos is a collection of 9,999 NFT characters on the
                Ethereum Blockchain, inspired by the business/finance world,
                hustler culture and web3 aesthetics. Each Hustlin' Hardo is a
                completely original and unique combination of hundreds of
                potential attributes such as luxury watches, clothing, or
                accessories - all with provable degrees of rarity. The
                collection features truly unique and powerful artwork, while
                offering its holders first-of-its-kind utility. Your Huslin'
                Hardo NFT is your gateway to The Boardroom, one of the most
                rewarding and engaging online communities"
                  ParaClasss="pb-[16px]"
                />
                <a
                  href="#"
                  className="underline cursor-pointer hover:text-blue-800 transition-all"
                >
                  <CommonPara ParaText="Read More" ParaClass="" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={BlueOutfitCartoon}
                alt="blue-outfit-cartoon-img"
                className="w-full max-h-[572px] lg:min-h-[572px] max-lg:border-t-2 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreakingNews;
