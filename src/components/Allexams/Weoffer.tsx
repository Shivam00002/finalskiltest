import React, { useState, ReactNode } from 'react';
import { BsCameraVideo, BsCardChecklist } from 'react-icons/bs';
import { GrDocumentTime } from 'react-icons/gr';
import { GiBookCover } from 'react-icons/gi';
import PrevYearP from './Courses/PrevYearP';
import Quizzes from './Courses/Quizzes';
import TestSeries from './Courses/TestSeries';

const Weoffer = () => {
  const [activeComponent, setActiveComponent] = useState<ReactNode>(<Quizzes />);
  const [active, setActive] = useState<boolean>(false);

  const handleClick = (component: ReactNode) => {
    setActiveComponent(component);
    setActive(true);
  };

  return (
    <>
      <div>
        <h1 className='text-center md:py-6 py-2 font-semibold md:text-[24px] text-[18px]'>Content we offer</h1>

        <div className='w-full md:w-[90%]   h-auto  flex flex-col md:flex-row px-2 py-2 mx-auto'>
          <div className='md:w-80 h-full px-2 flex flex-row md:block overflow-x-scroll justify-between md:justify-normal'>
            <div
              className={`border md:w-full w-[90px]  md:h-full  h-7 md:rounded  rounded-xl mb-2 cursor-pointer hover:bg-sky-500  group  grid md:block place-content-center bg-teal-600 md:bg-white text-white`}
              onClick={() => handleClick(<TestSeries />)}
            >
              <div className='flex items-center gap-2 py-2 px-2'>
                <div className='hidden w-12 h-12 border rounded-full md:flex justify-center  items-center bg-[#c58af2]  text-white group-hover:bg-sky-500'>
                  <GrDocumentTime size={20} className='text-white invert-[1]' color='white' />
                </div>
                <h2 className='font-semibold md:text-gray-500 text-white  group-hover:text-white text-xs md:text-[16px]'>
                  Test Series
                </h2>
              </div>
            </div>

            <div
              className={`border md:w-full w-[90px]  md:h-full  h-7 md:rounded  rounded-xl mb-2 cursor-pointer hover:bg-sky-500  group  grid md:block place-content-center bg-teal-600 md:bg-white text-white`}
              onClick={() => handleClick(<Quizzes />)}
            >
              <div className='flex items-center gap-2 py-2 px-2'>
                <div className='hidden w-12 h-12 border rounded-full md:flex justify-center  items-center bg-[#c58af2]  text-white group-hover:bg-sky-500'>
                  <BsCardChecklist size={20} color='white' />
                </div>
                <h2 className='font-semibold md:text-gray-500 text-white  group-hover:text-white text-xs md:text-[16px]'>
                  Quizzes
                </h2>
              </div>
            </div>

            <div
              className={`border md:w-full   md:h-full  h-7 md:rounded  rounded-xl mb-2 cursor-pointer hover:bg-sky-500  group  grid md:block place-content-center bg-teal-600 md:bg-white text-white`}
              onClick={() => handleClick(<PrevYearP />)}
            >
              <div className='flex items-center gap-2 py-2 px-2'>
                <div className='hidden w-12 h-12 border rounded-full md:flex justify-center  items-center bg-[#c58af2]  text-white group-hover:bg-sky-500'>
                  <GiBookCover size={20} color='white' />
                </div>
                <h2 className='font-semibold md:text-gray-500 text-white  group-hover:text-white text-xs md:text-[16px]'>
                  Previous Year Papers
                </h2>
              </div>
            </div>
          </div>

          <div className='px-2 py-2 rounded bg-slate-100 w-full'>{activeComponent}</div>
        </div>
      </div>
    </>
  );
};

export default Weoffer;
