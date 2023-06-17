import React, { FC } from 'react';
import { TiTick } from 'react-icons/ti';

const Quizzes: FC = () => {
  return (
    <>
      <div>
        <div className='flex col-span-2 gap-4 justify-around items-center md:h-auto h-36 flex-wrap'>
          <div className='md:w-fit w-80'>
            <div className='flex gap-2 items-center px-2 py-1'>
              <div className='h-4 w-4 rounded-full flex items-center border bg-orange-600'>
                <TiTick color="white" size={22} />
              </div>
              <p className='md:text-[15px] text-[13px]'>Free Quizzes by Subject Matter Experts</p>
            </div>

            <div className='flex gap-2 items-center px-2 py-1'>
              <div className='h-4 w-4 rounded-full flex items-center border bg-orange-600'>
                <TiTick color="white" size={22} />
              </div>
              <p className='md:text-[15px] text-[13px]'>Easy Evaluation of Progress</p>
            </div>
          </div>

          <div className='md:w-fit w-80 md:mt-0 -mt-14'>
            <div className='flex gap-2 items-center px-2 py-1'>
              <div className='h-4 w-4 rounded-full flex items-center border bg-orange-600'>
                <TiTick color="white" size={22} />
              </div>
              <p className='md:text-[15px] text-[13px]'>Over 2000 questions for every exam</p>
            </div>

            <div className='flex gap-2 items-center px-2 py-1'>
              <div className='h-4 w-4 rounded-full flex items-center border bg-orange-600'>
                <TiTick color="white" size={22} />
              </div>
              <p className='md:text-[15px] text-[13px]'>Variety of Practice Question Sets Available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quizzes;
