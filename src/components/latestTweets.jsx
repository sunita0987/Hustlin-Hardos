import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CommonHeading from "../common/CommonHeading";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import { SLIDER_DATA } from "../utils/helper";

const LatestTweets = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="bg-[#f6f1e2]">
        <div className="max-w-[1140px] px-3 mx-auto py-10 md:py-15 lg:py-[89px]">
          <div className="flex justify-between items-center">
            <CommonHeading HeadText="Latest Tweets" HeadClass="uppercase" />
            <div className="flex items-center gap-[55px]">
              <button ref={prevRef} className="cursor-pointer">
                <img src={LeftArrow} alt="left-arrow" />
              </button>
              <button ref={nextRef} className="cursor-pointer">
                <img src={RightArrow} alt="right-arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-b-2 ">
          <div className="max-w-[1140px] mx-auto px-4 bg-[#F6F1E2]">
            <Swiper
              spaceBetween={0}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                668: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Navigation]}
            >
              {SLIDER_DATA.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col px-[26px] max-[1025px]:h-[259px] py-[47px] border-l-2">
                    <p className="m-0 font-semibold text-[36px] leading-[111%] ff-noto">
                      {item.name}
                    </p>
                    <div className="flex gap-[11px] items-center pt-[13px]">
                      <a
                        href="https://x.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <item.icon />
                      </a>
                      <p className="ff-noto text-sm leading-[100%]">
                        {item.date}
                      </p>
                    </div>
                    <p className="ff-noto text-sm leading-[121%] max-w-[327px] m-0 pt-[13px]">
                      {item.description}
                    </p>
                    <a
                      href="#"
                      className="ff-noto text-sm leading-[100%] hover:text-sky-800 pt-[15px]"
                    >
                      {item.link}
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestTweets;
