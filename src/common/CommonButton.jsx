import React from "react";

const CommonButton = ({ btnText, btnClass }) => {
  return (
    <div className="relative inline-block group">
      <button
        className={`
          bg-[#FFD600]
          border-2 border-black
          text-sm font-semibold ff-noto
           cursor-pointer
          py-[9.5px] px-[14.4px]
          uppercase
          transition-all duration-500 ease-in-out
          hover:text-white hover:[box-shadow:inset_0_-100px_0_0_black] active:scale-90
          ${btnClass}
        `}
      >
        {btnText}
      </button>
    </div>
  );
};

export default CommonButton;