import React, { useContext, useState } from 'react';
;
import Instructions from '../components/Instructions';
import Quiz from '../components/Quiz';
import QInstruction from '@/components/QInstruction';
import QSections from '@/components/QSections';
import Result from '@/pages/Result';

import Allexams from '@/components/Allexams/Allexams';
import Pepars from '@/components/Allexams/EXAM_WISE_PAPERS/Pepars';
import QuizHome from '@/components/QuizHome';
import { Header } from '@/components/Header';

export default function Test() {
  const [isActive, setIsActive] = useState(false);


  return (
    <>
      <Header />
      {isActive ? (
        <QuizHome />
      ) : (
        <Instructions setIsActive={setIsActive} />
      )}
  {/* <QuizHome /> */}
      {/* <Allexams/> */}
      {/* <Pepars/> */}
      {/* <Result/> */}
    </>
  );
};

