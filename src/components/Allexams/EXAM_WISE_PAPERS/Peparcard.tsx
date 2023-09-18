import React from 'react';
import { BsBookHalf } from 'react-icons/bs';

const Peparcard: React.FC = () => {
  return (
    <>
      <div className='md:w-56 md:h-[270px] group cursor-pointer border border-gray-200 md:px-1 px-0 md:py-2 py-1 rounded-md md:mt-4 mt-3 justify-center text-center hover:shadow-xl transition-all md:block flex content-center h-16'>
        <div className='bg-gray-200 mt-1 mx-auto md:mt-3 md:w-9 md:h-9 h-12 w-12 flex justify-center items-center rounded-full'>
          <BsBookHalf size={20} />
        </div>
        <div className='mt-1'>
          <h2 className='font-semibold py-1 text-gray-600 md:text-[15px] text-[13px]'>UPPCS 2020 CSAT Paper</h2>
          <div className='md:hidden flex px-2 py-1 md:mt-2 text-gray-600 gap-2 text-[10px] -mt-2'>
            <p>3 Attempts</p>
          </div>
        </div>

        <div className='hidden md:flex px-2 py-1 md:mt-2 text-gray-600 justify-between'>
          <p>
            <span className='w-1 h-1 bg-gray-600 rounded-full inline-flex mb-[4px]'></span> Attempts
          </p>
          <p>3</p>
        </div>
        <div className='hidden md:flex px-2 py-1 text-gray-600 justify-between'>
          <p>
            <span className='w-1 h-1 bg-gray-600 rounded-full inline-flex mb-[4px] mr-1'></span>Questions
          </p>
          <p>50</p>
        </div>
        <div className='hidden md:flex px-2 text-gray-600 py-1 justify-between'>
          <p>
            <span className='w-1 h-1 bg-gray-600 rounded-full inline-flex mb-[4px] mr-1'></span>Max marks
          </p>
          <p>100</p>
        </div>
        <div className='border text-white font-semibold mx-auto border-orange-500 md:w-48 w-20 md:text-[16px] text-[11px] flex justify-center md:rounded-md rounded items-center md:mt-3 md:h-9 mt-3 h-7 text-center group-hover:bg-orange-500 group-hover:text-white md:bg-white bg-orange-600 md:text-orange-600'>
          START <span className='hidden ml-2 md:inline-block'> TEST </span>
        </div>
      </div>
    </>
  );
};

export default Peparcard;
