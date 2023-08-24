import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { generalInstructions } from "@/data/generalInstructions";

const Instructions: React.FC<{ setIsActive: (isActive: boolean) => void }> = ({ setIsActive }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  function onCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    if (checked) {
      setIsDisabled(true);
    }
    if (!checked) {
      setIsDisabled(false);
    }


  }

  const NextButtonActive = () => {
    setIsActive(true);
  };

  return (
    <>
      <div className="w-full  h-28 grid grid-cols-4 gap-x-3 py-2 px-4 md:mt-16 mt-14">
        <div className=" col-span-4 md:col-span-3 ">
          <h2 className="md:py-2 py-0 md:px-4 px-2 font-semibold text-[20px]">
            General Instructions
          </h2>
          <p className="py-1 px-4  font-semibold text-[15px]">
            {generalInstructions.instruction1.text}
          </p>

          <p className="py-1 px-4  font-semibold text-[15px]">
            {generalInstructions.instruction2.text}
          </p>
          {generalInstructions.instruction2.options.map((option: any, index: number) => (
            <div
              key={index}
              className="flex gap-6 py-0 px-4 mt-2 md:text-[16px] text-[12px]"
            >
              <div
                style={{ background: option.bg }}
                className="md:w-8 md:h-8   rounded w-6 h-6"
              ></div>
              <p  className="px-0 py-0 text-[#4a4242]   md:text-[16px] text-[14px]">{option.text}</p>
            </div>
          ))}

          <p className="py-1 px-4 font-semibold  text-[#565151] text-[15px]">
            The <span className="bold text-[black]"> Mark For Review</span>{" "}
            status for a question simply indicates that you would like to look
            at that question again. If a question is answered but marked for
            review, then the answer will be considered for evaluation unless the
            status is modified by the candidate.
          </p>

          <p className="md:py-2 py-0 px-4 font-semibold text-[16px]">
            Navigating to a Question :
          </p>

          <p className="py-1 px-4  font-semibold text-[15px]">
            {generalInstructions.instruction3.text}
          </p>

          {generalInstructions.instruction3.options.map((option: any, index: number) => (
            <p
              key={index}
              className="py-0 px-6 font-semibold  text-[#565151] text-[15px]"
            >
              {option.text}
            </p>
          ))}

          <p className="md:py-2 py-0 px-4 font-semibold text-[16px]">
            Answering a Question :
          </p>
          <p className="py-1 px-4  font-semibold text-[15px]">
            {generalInstructions.instruction4.text}
          </p>
          {generalInstructions.instruction4.options.map((option: any, index: number) => (
            <p
              key={index}
              className="py-1 px-6 font-semibold  text-[#565151] text-[15px]"
            >
              {option.text}
            </p>
          ))}

          <p className="py-1 px-4  font-semibold text-[15px]">
            {generalInstructions.instruction5.text}
          </p>
          {generalInstructions.instruction5.options.map((option: any, index: number) => (
            <p
              key={index}
              className="py-1 px-6 font-semibold  text-[#565151] text-[15px]"
            >
              {option.text}
            </p>
          ))}

          <p className="py-1 px-4   font-semibold text-[15px]">
            {generalInstructions.instruction6.text}
          </p>

          <p className="py-1 px-4  font-semibold text-[15px]">
            {generalInstructions.instruction7.text}
          </p>

          <p className="py-1 px-4  font-semibold text-[15px]">
            {generalInstructions.instruction8.text}
          </p>

          <p className="py-1 px-4  font-semibold text-[15px]">
            {generalInstructions.instruction9.text}
          </p>

          <p className="py-1 px-4  font-semibold text-[15px]">
            {generalInstructions.instruction10.text}
          </p>

          <div className="relative overflow-x-auto  sm:rounded-lg">
            <table className="w-[80%] text-sm text-left text-gray-500 dark:text-gray-400 mx-auto mt-4">
              <thead className="text-xs text-white uppercase bg-blue-500  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    SI No.1
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Section Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    No. of Question
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Maximum Marks
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Negative Marks
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Positive Marks
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td className="px-6 py-4">Test</td>
                  <td className="px-6 py-4">50</td>
                  <td className="px-6 py-4">100</td>
                  <td className="px-6 py-4">0.66</td>

                  <td className="px-6 py-4">2</td>
                </tr>
              </tbody>
            </table>
          </div>

          {generalInstructions.rules.map((rule: any, index: number) => (
            <p key={index} className="py-1 px-4  font-semibold text-[15px]">
              {rule.text}
            </p>
          ))}

          <div className="flex  items-center  md:mt-10 mt-0 shadow-xl md:shadow-none rounded-md">
            <input
              className="scale-[1.2] ml-6"
              type="checkbox"
              onChange={onCheck}
            />

            <label className="py-1 px-4  font-normal leading-1 text-[15px]">
              {generalInstructions.terms.text}
            </label>
          </div>

          <div className="justify-center  flex gap-5 py-2 px-4 ml-10 ">
            <button className="border  w-36 px-2 py-2 rounded hover:bg-amber-300 bg-amber-400 whitespace-nowrap ">
              Back to test
            </button>
            <button
              disabled={!isDisabled}
              onClick={NextButtonActive}
              className="border w-36 px-6 py-2 rounded  hover:bg-amber-300 bg-amber-400"
            >
              Next
            </button>
          </div>
        </div>

        <div className="w-full  h-28 hidden md:block ">
          {/* <Sidebar /> */}
        </div>
      </div>
    </>
  );
};

export default Instructions;
