import React from "react";
import Dot from "../Dot";

const QuestionPalette: React.FC = () => {
  return (
    <>
      <div className="flex gap-3 py-0 px-0 ml-3">
        <h2 className="font-semibold py-1 px-0 text-[19px]">
          Question Palette
        </h2>
      </div>


      <div className="w-full grid grid-cols-3 px-0 ml-3">
        <div className="flex items-center">
          <Dot color={"green"} />
          <p className="text-[14px]  text-[gray] px-1 py-1">Attempted</p>
        </div>
        <div className="flex items-center">
          <Dot color={"black"} />
          <p className="text-[14px]  text-[gray] px-0 ml-1 py-1">Unattempted</p>
        </div>
        <div className="flex items-center ml-3">
          <Dot color={"gray"} />
          <p className="text-[14px]  text-[gray] px-1 py-1">Unseen</p>
        </div>
        <div className="flex items-center mt-[-4px]">
          <Dot color={"orange"} />
          <p className="text-[14px]  text-[gray] px-1 py-1">Pending</p>
        </div>
      </div>
    </>
  );
};

export default QuestionPalette;
