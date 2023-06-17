import React from "react";
import styles from "../styles/Quiz.module.css";

interface SelectedAnswer {
  questionId: number;
  optionIndex: number;
}

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface QuestionBoxProps {
  question: Question;
  handleAnswerSelect: (questionId: number, optionIndex: number) => void;
  selectedAnswers: SelectedAnswer[];
}

const QuestionBox: React.FC<QuestionBoxProps> = ({
  question,
  handleAnswerSelect,
  selectedAnswers,
}) => {
  return (
    <div className="mt-4 w-full" key={question.id}>
      <p className="font-normal text-gray-700 mb-3">{question.question}</p>

      <div className="w-full">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswers.some(
            (selectedAnswer) =>
              selectedAnswer.questionId === question.id &&
              selectedAnswer.optionIndex === index
          );

          return (
            <div key={index}>
              <div
                className={`${styles.option} ${
                  isSelected ? styles.highlighted : ""
                }`}
                onClick={() => handleAnswerSelect(question.id, index)}
              >
                <p>{option}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionBox;
