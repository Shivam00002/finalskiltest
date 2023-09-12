import React from 'react';
import { BsListStars } from 'react-icons/bs';
import { RiCheckDoubleLine, RiTimerLine } from 'react-icons/ri';
import { RxCrossCircled } from 'react-icons/rx';
import { GiChart } from 'react-icons/gi';
import { SiSimpleanalytics } from 'react-icons/si';

const Mobileview: React.FC = () => {
  return (
    <>

      <div className="grid grid-cols-3 mt-2 md:hidden">
        <div className="border-r border-b place-items-center px-2 full h-16 grid place-content-center">
          <p className="font-semibold md:text-center text-left text-green-600 text-sm md:text-lg">0/30</p>

          <div className="flex md:justify-center gap-1 py-2">
            <div className="flex items-center">
              <RiCheckDoubleLine size={18} />
            </div>
            <p className="font-semibold md:text-center text-left text-gray-600 text-xs md:text-lg lg:text-[14px]">Right</p>
          </div>
        </div>

        <div className="border-r place-items-center border-b text-left px-2 full h-16 place-content-center grid">
          <p className="font-semibold md:text-center text-left text-red-600 text-sm md:text-lg">0/30</p>

          <div className="flex md:justify-center gap-1 py-2 items-center">
            <RxCrossCircled size={15} />
            <p className="font-semibold md:text-center text-left text-gray-600 text-xs md:text-lg lg:text-[14px]">
              Wrong
            </p>
          </div>
        </div>

        <div className="border-b place-items-center text-left px-2 full h-16 place-content-center grid">
          <p className="font-semibold md:text-center text-left text-sm md:text-lg">0/30</p>

          <div className="flex md:justify-center gap-1 items-center">
            <SiSimpleanalytics size={12} />
            <p className="font-semibold md:text-center text-left py-2 text-gray-600 text-xs md:text-lg lg:text-[14px]">
              Score
            </p>
          </div>
        </div>

        <div className="border-r place-items-center text-left px-2 full h-16 place-content-center grid">
          <p className="font-semibold md:text-center text-left text-sm md:text-lg">00:00:05</p>

          <div className="flex md:justify-center gap-1 items-center">
            <RiTimerLine size={18} />
            <p className="font-semibold md:text-center text-left py-2 text-gray-600 text-xs md:text-lg lg:text-[14px]">
              Time
            </p>
          </div>
        </div>

        <div className="border-r place-items-center text-left px-2 full h-16 place-content-center grid">
          <p className="font-semibold md:text-center text-left text-sm md:text-lg">0%</p>

          <div className="flex md:justify-center gap-2 items-center">
            <GiChart size={14} />
            <p className="font-semibold md:text-center text-left py-2 text-gray-600 text-xs md:text-lg lg:text-[14px]">
              Accuracy
            </p>
          </div>
        </div>

        <div className="place-items-center text-left px-2 full h-16 place-content-center grid">
          <p className="font-semibold md:text-center text-left text-sm md:text-lg">45/9252</p>

          <div className="flex md:justify-center gap-1 items-center">
            <BsListStars size={18} />
            <p className="font-semibold text-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
              Rank
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobileview;
