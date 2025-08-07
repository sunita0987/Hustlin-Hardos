import React from "react";

const SubHeading = ({ SubText, SubClass }) => {
  return (
    <div>
      <p className={`text-[16px] ff-noto m-0 uppercase ${SubClass}`}>
        {SubText}
      </p>
    </div>
  );
};

export default SubHeading;
