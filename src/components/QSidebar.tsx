import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Accordian } from "./Accordian";
import questions from "@/data/questions";
import Dot from "./Dot";

interface Answer {
  questionId: number;
  // Add other properties of the answer if available
}

interface QSidebarProps {
  onQuestionClick: (id: number) => void;
}

export const QSidebar: React.FC<QSidebarProps> = ({ onQuestionClick }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedId, setSelectedId] = useState<number | undefined>();

  const isClicked = (item: number) => {
    return answers?.find((a) => a.questionId === item);
  };

  useEffect(() => {
    const storedAnswers = sessionStorage.getItem("selectedAnswers");
    if (storedAnswers) {
      const parsedAnswers = JSON.parse(storedAnswers) as Answer[];
      setAnswers(parsedAnswers);
    }
  }, [onQuestionClick]);

  return (
    <div className="border-l-[2px] ml- p-2 fixed py-0 h-full left-auto top-[60px] mt-0">
      <div className="flex py-2 px-2 items-center">
        <div>
          <Image
            width={65}
            height={65}
            alt="user-profile"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"
          />
        </div>
        <div className="px-4">
          <h2 className="text-center from-neutral-800 text-[16px] font-semibold">
            Shivam Dubey
          </h2>
        </div>
      </div>

      <div className="flex gap-3 py-0 px-0 ml-3">
        <h2 className="font-semibold py-1 px-0 text-[19px]">
          Question Palette
        </h2>
      </div>

      <div className="w-full grid grid-cols-3 px-0 ml-3">
        <div className="flex items-center">
          <Dot color={"green"} />
          <p className="text-[14px] text-[gray] px-1 py-1">Attempted</p>
        </div>
        <div className="flex items-center">
          <Dot color={"black"} />
          <p className="text-[14px] text-[gray] px-0 ml-1 py-1">Unattempted</p>
        </div>
        <div className="flex items-center ml-3">
          <Dot color={"gray"} />
          <p className="text-[14px] text-[gray] px-1 py-1">Unseen</p>
        </div>
        <div className="flex items-center mt-[-4px]">
          <Dot color={"orange"} />
          <p className="text-[14px] text-[gray] px-1 py-1">Pending</p>
        </div>
      </div>
      <Accordian title="dfgdf">
        <div className="grid grid-cols-5 fixed gap-5 py-2 px-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-white h-[200px]">
        {questions.map((el: { id: number }, index: number) => (
  <div key={index} className="py-0 grid">
    <button
      onClick={() => {
        onQuestionClick(el.id);
        isClicked(el.id);
        setSelectedId(el.id);
      }}
      className={`bg-gray-500 px-0 py-0 w-11 h-7 grid place-content-center rounded text-white`}
      style={{
        backgroundColor: isClicked(el.id) ? "#468DFF" : "#6A7380",
      }}
    >
      {el.id}
    </button>
  </div>
))}

        </div>
      </Accordian>
    </div>
  );
};

