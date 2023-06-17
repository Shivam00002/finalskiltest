import React, { useEffect, useState } from "react";


import { Actions } from "./Actions";

import { QuestionTabs } from "./QuestionTabs";
import { Accordian } from "../Accordian";
import Header from "./Header";
import QuestionPalette from "./QuestionPalette";
import Responses from "./Responses";

interface QSidebarProps {
  onQuestionClick: any;
}

const QSidebar: React.FC<QSidebarProps> = ({ onQuestionClick }) => {
  const [answers, setAnswers] = useState<any[]>([]);

  const isClicked = (item: string) => {
    return answers?.find((a) => a.questionId === item);
  };

  useEffect(() => {
    const answers = JSON.parse(sessionStorage.getItem("selectedAnswers") || "[]");
    setAnswers(answers);
  }, [onQuestionClick]);

  return (
    <div className="border-l-[2px] ml- p-2 fixed py-0 h-full left-auto top-[74px] mt-0">
      <Header />
      <QuestionPalette />
      <Accordian title="testing">
        <Responses />
        <QuestionTabs onQuestionClick={onQuestionClick} isClicked={isClicked} />
      </Accordian>
      <Actions />
    </div>
  );
};

export default QSidebar;
