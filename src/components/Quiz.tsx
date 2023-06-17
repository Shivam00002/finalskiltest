import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import styles from "../styles/Quiz.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";

import QuizHeader from "./QuizHeader";
import QuestionBox from "./QuestionBox";
import QuestionActions from "./QuestionActions";
import QSidebar from "./QSidebar/index";

interface QuizProps {
  question: any;
  selectedAnswers: any;
  currentPage: number;
  time: number;
  handleAnswerSelect: (questionId: number, optionIndex: number) => void;
  handlePrevPage: () => void;
  onQuestionClick: (question: any) => void;
  handleNextPage: () => void;
  handleClearResponse: () => void;
  showInstructions: boolean;
  setShowInstructions: (show: boolean) => void;
}

const Quiz: React.FC<QuizProps> = ({
  question,
  selectedAnswers,
  currentPage,
  time,
  handleAnswerSelect,
  handlePrevPage,
  onQuestionClick,
  handleNextPage,
  handleClearResponse,
  showInstructions,
  setShowInstructions,
}) => {
  const [star, showStar] = useState(true);

  const starClick = () => {
    showStar(!star);
  };

  const totalPages = questions.length;

  return (
    <div className="w-full">
      <div className="col-span-3 p-2">
        <div className="flex justify-between">
          <QuizHeader
            currentPage={currentPage}
            star={star}
            time={time}
            starClick={starClick}
          />
        </div>

        {question && (
          <QuestionBox
            question={question}
            handleAnswerSelect={handleAnswerSelect}
            selectedAnswers={selectedAnswers}
          />
        )}

        <QuestionActions
          handleClearResponse={handleClearResponse}
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
        />
      </div>
    </div>
  );
};

export default Quiz;
