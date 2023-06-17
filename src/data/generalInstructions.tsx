
 export interface GeneralInstructions {
    instruction1: {
      text: string;
    };
    instruction2: {
      text: string;
      options: {
        text: string;
        bg: string;
      }[];
    };
    instruction3: {
      text: string;
      options: {
        text: string;
      }[];
    };
    instruction4: {
      text: string;
      options: {
        text: string;
      }[];
    };
    instruction5: {
      text: string;
      options: {
        text: string;
      }[];
    };
    instruction6: {
      text: string;
    };
    instruction7: {
      text: string;
    };
    instruction8: {
      text: string;
    };
    instruction9: {
      text: string;
    };
    instruction10: {
      text: string;
    };
    rules: {
      text: string;
    }[];
    terms: {
      text: string;
    };
  }
  




export const generalInstructions = {
    instruction1: {
      text:
        "1: The clock will be set at the server. The countdown timer at the top right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You need not terminate the examination or submit your paper.",
    },
    instruction2: {
      text:
        "2: The Question Palette displayed on the right side of the screen will show the status of each question using one of the following symbols:",
      options: [
        {
          text: "You have not visited the question yet.",
          bg: "#000000",
        },
        {
          text: "You have answered the question.",
          bg: "#1E88E5",
        },
        {
          text: "You have NOT answered the question, but have marked the question for review.",
          bg: "#FFEE58",
        },
        {
          text: "You have answered the question also marked it for review.",
          bg: "#42A5F5",
        },
      ],
    },
    instruction3: {
      text: "To answer a question, do the following:",
      options: [
        {
          text:
            "A: Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.",
        },
        {
          text: "B: Click on Next to save your answer for the current question and then go to the next question.",
        },
      ],
    },
    instruction4: {
      text: "4: Procedure for answering a multiple choice (MCQ) type question:",
      options: [
        {
          text: "A: Choose one answer from the options given below the question, click on the option to select that option.",
        },
        {
          text: "B: To deselect your chosen answer, click on the bubble of the chosen option again.",
        },
        {
          text: "C: To change your chosen answer, click on the bubble of another option.",
        },
        {
          text: "D: To save your answer, you MUST click on Next.",
        },
      ],
    },
    instruction5: {
      text: "5: Procedure for answering a numerical answer type question :",
      options: [
        {
          text: "A: To enter a number as your answer, use the numerical keypad.",
        },
        {
          text:
            "B: A fraction (e.g. -0.3 or -.3) can be entered as an answer with or without “0” before the decimal point. As many as four decimal points, e.g. 12.5435 or 0.003 or -932.6711 or 12.82 can be entered.",
        },
        {
          text: "C: To save your answer, you MUST click on Next.",
        },
      ],
    },
    instruction6: {
      text:
        "6: To mark a question for review, click on the Star button in the top right corner of the screen. If an answer is selected (for MCQ/MCAQ) or entered (for numerical answer type) for a question that is Marked for Review, that answer will be considered in the evaluation unless the status is modified by the candidate.",
    },
    instruction7: {
      text:
        "7: To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.",
    },
    instruction8: {
      text: "8: Note that ONLY Questions for which answers are saved or marked for review after answering will be considered for evaluation.",
    },
    instruction9: {
      text:
        "9: Sections in this question paper are displayed on the top bar of the screen. Questions in a Section can be viewed by clicking on the button in the lower right corner. The Section you are currently viewing",
    },
    instruction10: {
      text: "10: After clicking the Next button for the last question in a Section, you will automatically be taken to the first question of the next section in sequence.",
    },
    rules: [
      {
        text: "1. A total of 60 minutes is allotted for the examination.",
      },
      {
        text:
          "2.The server will set your clock for you. In the top right corner of your screen, a countdown timer will display the remaining time for you to complete the exam. Once the timer reaches zero, the examination will end automatically. The paper need not be submitted when your timer reaches zero.",
      },
      {
        text:
          "3. There will, however, be sectional timing for this exam. You will have to complete each section within the specified time limit. Before moving on to the next section, you must complete the current one within the time limits.",
      },
    ],
    terms: {
      text:
        "I have read all the instructions carefully and have understood them. I agree not to chat or use unfair means in examinations. I understood that using unfair means of any sort for my own or someone else’s advantage will lead to my immediate disqualification. The decision of Prepp.in will be final in these matters & cannot be appealed.",
    },
  };
  