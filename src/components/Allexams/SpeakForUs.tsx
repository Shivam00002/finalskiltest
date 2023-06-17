import Image from 'next/image';
import React from 'react';

const SpeakForUs: React.FC = () => {
  return (
    <>
      <div>
        <div className='md:flex hidden md:mt-4 mt-0'>
          <Image src='https://mindlerimages.imgix.net/tinyimg/desktop.svg' alt='members' width={900} height={450} className='mx-auto' />
        </div>

        <div className='w-full text-center h-full bg-teal-500 px-2 py-2 mt-0'>
          <h2 className='font-semibold text-white text-[26px]'>Our Numbers Speak For Us</h2>

          <div className='flex flex-col md:flex-row justify-center py-2 px-2 gap-6 mt-2 text-white font-semibold'>
            <h1 className='text-5xl font-semibold text-amber-400 mt-2'>3Cr+</h1>
            <h2 className='text-[23px] flex flex-row md:flex-col text-center md:text-right justify-center md:justify-normal'>  Registered <span className='ml-3'> Students</span>   </h2>
          </div>

          <div className='flex gap-5 justify-center items-center py-4'>
            <div className='w-30 h-auto border text-center bg-white font-bold text-blue-400 rounded py-2 md:py-5 md:px-6'>
              <h1 className='md:text-4xl  px-2 text-sm whitespace-nowrap'>3.44 Cr+</h1>
              <h2 className='md:text-xl py-1    text-[9px] '>Video Classes attended</h2>
            </div>

            <div className='w-30 h-auto border text-center bg-white font-bold text-green-500 rounded py-2 md:py-5 md:px-6'>
              <h1 className='md:text-4xl  px-2 text-sm whitespace-nowrap'>3.44 Cr+</h1>
              <h2 className='md:text-xl py-1 px-2 text-[9px]  '>Video Classes attended</h2>
            </div>

            <div className='w-30 h-auto border text-center bg-white font-bold text-red-600 rounded py-2 md:py-5 md:px-6'>
              <h1 className='md:text-4xl  px-2 text-sm whitespace-nowrap'>3.44 Cr+</h1>
              <h2 className='md:text-xl py-1 px-2 text-[9px]  '>Video Classes attended</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakForUs;
