import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

const Courses: React.FC = () => {
  return (
    <>
      <div className='mt-8'>
        <h3 className='font-semibold md:w-[90%]  md:mx-auto w-full px-2 md:py-4 py-2 md:text-[24px] text-[18px] text-center'>Start your preparation</h3>

        <div className='flex flex-row-l gap-6 flex-column md:w-[90%] md:mx-auto w-100 flex-wrap justify-center items-center px-2 py-3 '>
          <div className='w-[400px] h-36  bg-orange-600 text-white px-2  rounded'>
            <h2 className='px-2 py-2 font-bold text-xl '>Online Classroom Program</h2>
            <p className='px-2'>Live & Recorded courses by Top <br /> Faculty</p>
            <div className='px-2 mt-5 text-black font-semibold flex gap-2 items-center'>
              <Link href='#'>Explore Course </Link>
              <IoIosArrowForward/>
            </div>
          </div>

          <div className='w-[400px] h-36  bg-orange-600 text-white px-2  rounded'>
            <h2 className='px-2 py-2 font-bold text-xl '>Test Series</h2>
            <p className='px-2'>Live & Recorded courses by Top <br /> Faculty</p>
            <div className='px-2 mt-5 text-black font-semibold flex gap-2 items-center'>
              <Link href='#'>Explore Course </Link>
              <IoIosArrowForward/>
            </div>
          </div>

          <div className='w-[400px] h-36  bg-orange-600 text-white px-2  rounded'>
            <h2 className='px-2 py-2 font-bold text-xl '>Previous Year Papers</h2>
            <p className='px-2'>Live & Recorded courses by Top <br /> Faculty</p>
            <div className='px-2 mt-5 text-black font-semibold flex gap-2 items-center'>
              <Link href='#'>Explore Course </Link>
              <IoIosArrowForward/>
            </div>
          </div>

          <div className='w-[400px] h-36  bg-orange-600 text-white px-2  rounded'>
            <h2 className='px-2 py-2 font-bold text-xl '>Free Quizzes</h2>
            <p className='px-2'>Live & Recorded courses by Top <br /> Faculty</p>
            <div className='px-2 mt-5 text-black font-semibold flex gap-2 items-center'>
              <Link href='#'>Explore Course </Link>
              <IoIosArrowForward/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
