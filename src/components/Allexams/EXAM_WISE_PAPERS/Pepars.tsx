import React from 'react';
import { BsBookHalf } from 'react-icons/bs';
import { RiGovernmentLine } from 'react-icons/ri';
import Peparcard from './Peparcard';

const Pepars: React.FC = () => {
  return (
    <>
      <div className='md:w-[90%] md:mx-auto md:mt-20 mt-16 w-full h-full px-2 py-2'>
        <h1 className='md:text-[27px] font-bold'>UP State Exams Practice Set Papers, Model Sample Papers</h1>
        <p className='text-gray-600 md:text-[14px] text-[12px]'>Start practicing with UP State practice set papers free at College menter's Exam Prep. The UP State exams previous year solved papers 2020/2019/2018/2017/2016 are available online with the solutions and answers.</p>
      </div>

      <div className='md:w-[100%] md:h-[200px] h-[120px] border md:mt-5 bg-indigo-100'>
        <div className='md:w-[90%] md:mx-auto w-full h-full px-2 py-2'>
          <h2 className='font-semibold md:text-[19px]'>EXAM WISE PAPERS</h2>
          <p className='text-gray-600 md:text-[14px] text-[12px]'>View Previous Year Question Papers of all UPPSC Exams</p>

          <div className='md:w-[168px] md:h-[63px] mt-3 w-36 h-10 border md:mt-4 border-black px-2 py-2 cursor-pointer rounded bg-white'>
            <div className='flex gap-3 md:gap-4 md:px-1 px-0 md:py-0'>
              <RiGovernmentLine className='md:mt-2 w-6 md:w-fit -mt-1' size={30} />
              <div className='mt-0 md:mt-1 '>
                <p className='md:text-[12px] md:mt-0 -mt-1 text-[10px]'>UPPSC PCS</p>
                <p className='text-gray-600 font-semibold md:text-[12px] text-[10px]'>Previous papers</p>
              </div>
            </div>
          </div>

          <h2 className='md:mt-16 mt-6 font-semibold md:py-2 md:text-[25px]'>ALL UPPSC PRACTICE PAPERS</h2>
          <p className='text-gray-500 md:text-[14px] text-[12px] md:-mt-2 mt-0'>View all year-wise practice papers of UPPSC Exams</p>

          <div className=' md:mt-4 mt-2 bg-red-100 md:w-20 w-12 md:h-8 h-6 rounded-md md:top-10 flex items-center justify-center text-[13px] md:text-[18px]'>
            2022
          </div>

          {/* Card */}
          <Peparcard />
        </div>
      </div>
    </>
  );
};

export default Pepars;
