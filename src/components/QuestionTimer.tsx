import React, { useState, useEffect } from "react";

interface QuestionTimerProps {
  onTimerComplete: () => void;
}

const QuestionTimer: React.FC<QuestionTimerProps> = ({ onTimerComplete }) => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(true);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {import React, { useState, useEffect } from "react";

    const QuestionTimer: React.FC = () => {
      const [time, setTime] = useState<number>(0);
      const [running, setRunning] = useState<boolean>(true);
    
      useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
    
        if (running) {
          timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
          }, 1000);
        }
    
        return () => {
          if (timer) {
            clearInterval(timer);
          }
        };
      }, [running]);
    
      const handleRestart = (): void => {
        setTime(0);
        setRunning(true);
      };
    
      return (
        <div className="question-timer">
          <div className="py-0 px-0 mt-[2px]"></div>
          <h1 className="font-semibold text-black text-15px">
            Time: 00:{time < 10 ? `0${time}` : time}
          </h1>
          <button onClick={handleRestart}>Restart</button>
        </div>
      );
    };
    
    export default QuestionTimer;
    
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  useEffect(() => {
    if (time >= 60) {
      setRunning(false);
      onTimerComplete();
    }
  }, [time, onTimerComplete]);

  const handleRestart = () => {
    setTime(0);
    setRunning(true);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  return (
    <div className="hidden md:block">
      <div className="py-0 px-0 mt-[2px]"></div>
      <h1 className="font-semibold text-[black] text-[15px]">
        Time: {formatTime(time)}
      </h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default QuestionTimer;
