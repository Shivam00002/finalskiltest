import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import QSidebar from "./QSidebar/index";
import Quiz from "./Quiz";
import QInstruction from "./QInstruction";
import QSections from "./QSections";
import { Actions } from "./QSidebar/Actions";
import { useZustand } from "@/zustand";

interface Answer {
  questionId: number;
  optionIndex: number;
}

const QuizHome= () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeComponent, setActiveComponent] = useState<string>();
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(true);

  const showInstructions = useZustand((state) => state.showInstructions);
  const showAllQuestions = useZustand((state) => state.showAllQuestions);
  const showQuiz = useZustand((state) => state.showQuiz);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [running]);

  const handleRestart = () => {
    setTime(0);
    setRunning(true);
  };

  const handleQuestionClick = (questionId: number) => {
    handleRestart();
    const questionIndex = questions.findIndex(
      (question) => question.id === questionId
    );

    setCurrentPage(questionIndex + 1);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [running]);

  useEffect(() => {
    const storedAnswers = sessionStorage.getItem("selectedAnswers");
    if (storedAnswers) {
      setSelectedAnswers(JSON.parse(storedAnswers) || []);
    }
  }, []);

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    const updatedAnswers = selectedAnswers.filter(
      (selectedAnswer) => selectedAnswer.questionId !== questionId
    );

    const answer: Answer = { questionId, optionIndex };
    const newAnswers = [...updatedAnswers, answer];
    setSelectedAnswers(newAnswers);

    sessionStorage.setItem("selectedAnswers", JSON.stringify(newAnswers));
  };

  const handleNextPage = () => {
    handleRestart();

    if (currentPage < questions.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleClearResponse = () => {
    const currentIndex = selectedAnswers.findIndex(
      (selectedAnswer) => selectedAnswer.questionId === question?.id
    );

    if (currentIndex !== -1) {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers.splice(currentIndex, 1);
      setSelectedAnswers(updatedAnswers);

      sessionStorage.setItem(
        "selectedAnswers",
        JSON.stringify(updatedAnswers)
      );
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const question = questions[currentPage - 1];

  return (
    <>
      <div className="w-full grid h-28 grid-cols-1 md:grid-cols-4 gap-x-3 py-6 px-4 mt-12">
        <div className="col-span-3 p-2">
          {showInstructions && <QInstruction setShowInstructions={undefined} setShowQuiz={undefined} />}
          {showQuiz && (
            <Quiz
              question={question}
              time={time}
              currentPage={currentPage}
              handleAnswerSelect={handleAnswerSelect}
              selectedAnswers={selectedAnswers}
              handlePrevPage={handlePrevPage}
              onQuestionClick={handleQuestionClick}
              handleClearResponse={handleClearResponse}
              handleNextPage={handleNextPage}
               showInstructions={false} 
               setShowInstructions={function (show: boolean): void {
                throw new Error("Function not implemented.");
              } }            />
          )}
          {showAllQuestions && <QSections />}
        </div>
        <div className="w-full sticky top-10 hidden md:block h-fit">
          <QSidebar onQuestionClick={handleQuestionClick} />
        </div>
      </div>
    </>
  );
};

export default QuizHome;
