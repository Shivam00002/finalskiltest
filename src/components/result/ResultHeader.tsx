import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ResultHeader: React.FC = () => {
  return (
    <>
      <div className="md:flex hidden top-0 py-2 fixed px-3 w-full border justify-between overflow-hidden bg-white items-center">
        <div className="flex gap-10">
          <Link href="#" className="w-[160px] md:w-[250px] h-[52px] relative inline-block -translate-x-4 cursor-pointer">

            <Image
              width={250}
              height={50}
              src="https://dev.collegementor.com/logo.svg?width=640&quality=75&format=webp"
              alt="logo"
              className="object-contain w-full h-full absolute left-3"
            />

          </Link>
          <h2 className="mt-3 text-[15px] flex font-semibold ">
            UPSC Civil Services
            <span className="block md:hidden">....</span>
            <span className="hidden md:block">Prelims CSAT Full Test 4</span>{" "}
          </h2>
        </div>
        <div>
          <div className='flex w-[300px] h-auto gap-10 px-2 justify-around py-2'>
            <button className='border hover:bg-yellow-300 bg-yellow-400 px-2 py-2 rounded-md'>Reattempt Test</button>
            <button className='border border-black px-2 py-1 rounded-md hover:bg-black hover:text-white'>Go to Tests</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultHeader;
