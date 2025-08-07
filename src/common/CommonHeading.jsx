import React from "react";

const CommonHeading = ({ HeadClass, HeadText }) => {
  return (
    <div>
      <p
        className={`text-[40px] leading-[104%] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] [text-shadow:2px_2px_4px_#00000040] ff-noto ${HeadClass}`}
      >
        {HeadText}
      </p>
    </div>
  );
};

export default CommonHeading;
