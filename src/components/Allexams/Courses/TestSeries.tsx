import React, { FC } from 'react';
import { TiTick } from 'react-icons/ti';

const TestSeries: FC = () => {
  return (
    <>
      <div>
        <div className='flex col-span-2 md:gap-4 -gap-1 justify-around items-center md:h-auto h-36 flex-wrap'>
          <div className='md:w-fit w-80'>
            <div className='flex gap-2 items-center px-2 py-1'>
              <div className='h-4 w-4 rounded-full flex items-center border bg-orange-600'>
                <TiTick color="white" size={22} />
              </div>
              <p className='md:text-[15px] text-[13px]'>Designed by Exam Experts</p>
            </div>

            <div className='flex gap-2 items-center px-2 py-1'>
              <div className='h-4 w-4 rounded-full flex items-center border bg-orange-600'>
                <TiTick color="white" size={22} />
              </div>
              <p className='md:text-[15px] text-[13px]'>Full Length & Subject-Wise Mock Tests</p>
            </div>
          </div>

          <div className='md:w-fit w-80 md:mt-0 -mt-10'>
            <div className='flex gap-2 items-center px-2 py-1'>
              <div className='h-4 w-4 rounded-full flex items-center border bg-orange-600'>
                <TiTick color="white" size={22} />
              </div>
              <p className='md:text-[15px] text-[13px]'>Based on Latest Syllabus & Exam Pattern</p>
            </div>

            <div className='flex gap-2 items-center px-2 py-1'>
              <div className='h-4 w-4 rounded-full flex items-center border bg-orange-600'>
                <TiTick color="white" size={22} />
              </div>
              <p className='md:text-[15px] text-[13px]'>Detailed Solutions with Performance Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestSeries;
