import React from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { updates } from '@/data/updateResult';

const Updates: React.FC = () => {
  let i = 1;

  return (
    <>
      <div className='mt-2'>
        <h1 className='text-center font-semibold text-2xl py-4 px-2'>Latest Updates & Notifications</h1>
        <div className='flex border px-2 py-2 col-span-3 justify-center items-center gap-10 flex-wrap'>
          <div className='border w-80 h-fi rounded px-2 py-2'>
            <h2 className='px-1 font-semibold text-[19px] py-2'>Results</h2>
            <hr className='w-full h-0.5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-600 top-0 mt-1' />
            <div className='mt-2'>
            {updates.map((el:any) =>
  el.Result.map((admitelemet: string, admitindex: number) => {
    return (
      <div className='flex gap-2 justify-center items-center pb-2' key={admitindex}>
        <AiOutlineRightCircle className='self-start -mt-2' color='orange' size={45} />
        <p className='font-semibold cursor-pointer hover:text-orange-600'>{admitelemet}</p>
      </div>
    );
  })
)}

            </div>
          </div>
          <div className='border w-80 h-fi rounded px-2 py-2'>
            <h2 className='px-1 font-semibold text-[19px] py-2'>Notifications</h2>
            <hr className='w-full h-0.5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-600 top-0 mt-1' />
            <div className='mt-2'>
            {updates.map((el:any) =>
  el.Notifications.map((admitelemet: string, admitindex: number) => {
    return (
      <div className='flex gap-2 justify-center items-center pb-2' key={admitindex}>
        <AiOutlineRightCircle className='self-start -mt-2' color='orange' size={45} />
        <p className='font-semibold cursor-pointer hover:text-orange-600'>{admitelemet}</p>
      </div>
    );
  })
)}

            </div>
          </div>
          <div className='border w-80 h-[470px] rounded px-2 py-2'>
            <h2 className='px-1 font-semibold text-[19px] py-2'>Admit Cards</h2>
            <hr className='w-full h-0.5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-600 top-0 mt-1' />
            <div className='mt-2'>
            {updates.map((el:any) =>
  el.AdmitCards.map((admitelemet: string, admitindex: number) => {
    return (
      <div className='flex gap-2 justify-center items-center pb-2' key={admitindex}>
        <AiOutlineRightCircle className='self-start -mt-2' color='orange' size={45} />
        <p className='font-semibold cursor-pointer hover:text-orange-600'>{admitelemet}</p>
      </div>
    );
  })
)}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
