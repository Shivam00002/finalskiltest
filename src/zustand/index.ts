import create from "zustand";

type ZustandStore = {
  showInstructions: boolean;
  setShowInstructions: (showInstructions: boolean) => void;
  showAllQuestions: boolean;
  setShowAllQuestions: (showAllQuestions: boolean) => void;
  showQuiz: boolean;
  setShowQuiz: (showQuiz: boolean) => void;
  selectedQuestion: number | null;
  setSelectedQuestion: (selectedQuestion: number | null) => void;
};

export const useZustand = create<ZustandStore>((set) => ({
  showInstructions: false,
  setShowInstructions: (showInstructions) => set({ showInstructions }),
  showAllQuestions: false,
  setShowAllQuestions: (showAllQuestions) => set({ showAllQuestions }),
  showQuiz: true,
  setShowQuiz: (showQuiz) => set({ showQuiz }),
  selectedQuestion: null,
  setSelectedQuestion: (selectedQuestion) => set({ selectedQuestion }),
}));
