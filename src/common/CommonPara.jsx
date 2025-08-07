import React from "react";

const CommonPara = ({ ParaText, ParaClass }) => {
  return (
    <div>
      <p className={`ff-noto text-base m-0 leading-[100%] ${ParaClass}`}>
        {ParaText}
      </p>
    </div>
  );
};

export default CommonPara;
