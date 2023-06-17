import Image from 'next/image';
import React from 'react';
import Chooseclg from './Chooseclg';
import Courses from './Courses';
import Weoffer from './Weoffer';
import SpeakForUs from './SpeakForUs';
import Updates from './Updates ';


const Allexams: React.FC = () => {
  return (
    <>
      <div className='w-full bg-orange-600 md:mt-[70px] mt-[60px] flex gap-0 border md:h-[326px] h-[270px] md:text-left text-center justify-around'>
        <div className='md:px-8 md:py-8 px-4 py-4'>
          <h1 className='text-[white] font-semibold md:text-[45px] text-[35px] leading-[1.3]'>College mentor's Exam Prep</h1>
          <p className='text-[white] font-semibold md:text-[23px] text-[17px]'>The Most Comprehensive Preparation App for All Exams</p>
          <div className='text-[white] md:mx-0 mx-auto rounded w-fit text-sm bg-orange-800 font-semibold py-2 px-4 mt-4'>
            <p>Trusted by 3 Crore+ Students</p>
          </div>
        </div>
        <div className='h-[450px] w-[450px] hidden md:block'>
          <Image src="https://grdp.co/cdn-cgi/image/quality=100,width=720,f=auto/https://gs-post-images.grdp.co/2023/3/home_creative_web-img1680081740234-10.png-rs-high-webp.png" alt='default image' width={470} height={470} />
        </div>
      </div>

      {/* Second component */}
      <Chooseclg />
      {/* third component */}
      <Courses />
      <Weoffer />
      <SpeakForUs />
      <Updates />
    </>
  );
};

export default Allexams;
