import React from "react";
import Image from "next/image";
import { MdOutlineTimer } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface QuizHeaderProps {
  currentPage: number;
  star: boolean;
  starClick: () => void;
  time: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ currentPage, star, starClick, time }) => {
  return (
    <>
      <div className="flex items-center md:mt-0 -mt-4 space-x-3">
        <h2 className="font-semibold md:text-[16px] text-[14px]">Question {currentPage}</h2>
        <div className="flex space-x-2 items-center">
          <Image
            src="/icons/correct.svg"
            width={15}
            height={15}
            alt="correct icon"
            className="md:w-auto w-3"
          />
          <p className="text-[green] md:text-[14px] text-[12px]">+2</p>
          <Image
            src="/icons/wrong.svg"
            width={15}
            height={15}
            alt="wrong icon"
            className="md:w-auto w-3"
          />
          <p className="text-[red] md:text-[14px] text-[12px]">-0.66</p>
        </div>
      </div>
      <div className="flex md:gap-2 md:px-0 px-0 md:mt-0 -mt-4 gap-2">
        <div>
          <MdOutlineTimer className="w-[18px] md:w-auto" color="black" size={24} cursor="pointer" />
        </div>

        {/* <QuestionTimer /> */}

        {/* timer */}

        <div className="md:block">
          <div className="py-0 px-0 mt-[2px]"></div>
          <h1 className="font-semibold text-[black] md:text-[15px] md:mt-0 mt-1 text-[9px]">
            Time: 00:{time < 10 ? `0${time}` : time}
          </h1>
        </div>

        {star ? (
          <AiOutlineStar
            onClick={() => starClick()}
            color="black"
            size={24}
            cursor="pointer"
            className="md:w-auto w-5"
          />
        ) : (
          <AiFillStar
            onClick={() => starClick()}
            color="teal"
            size={24}
            cursor="pointer"
            className="md:w-auto w-5"
          />
        )}
      </div>
    </>
  );
};

export default QuizHeader;
