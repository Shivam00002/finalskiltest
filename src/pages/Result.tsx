import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { SiSimpleanalytics } from "react-icons/si";
import { RiCheckDoubleLine, RiTimerLine } from "react-icons/ri";
import { GiChart } from "react-icons/gi";
import { BsListStars, BsPercent } from "react-icons/bs";
import { FaRegTimesCircle } from "react-icons/Fa";
import { FiFlag } from "react-icons/Fi";
import { AiTwotoneStar } from "react-icons/ai";
import PieChart from "../components/piechart/PieChart";
import WrongAnsPie from "../components/piechart/wrongAnsPie";
import LeftAnsPie from "../components/piechart/LeftPie";
import AccuracyChart from "../components/piechart/AccuChart";
import { header } from "@/data/header";
import { Container } from "../components/Container";
import Mobileview from "../components/result/Mobileview";
import ResultHeader from "@/components/result/ResultHeader";



const Result = () => {
  return (
//     <>
//     <ResultHeader/>
//    <Container>
   
//       <div className="w-full   md:mt-20  mt-[5px] ">
//         <h1 className="font-semibold text-start text-[19px] ">
//           Overall Performance Analysis
//         </h1>

//         <div className="hidden md:grid md:grid-cols-5 lg:grid-cols-8 grid-cols-4 mt-5 border ">

//           <div className="  text-left px-2  full h-16">
//             <p className="font-semibold md:text-center text-left text-green-600 text-sm md:text-lg ">0/30</p>

//             <div className="flex md:justify-center gap-1 py-2">
//               <div className="flex items-center ">
//                 {" "}
//                 <RiCheckDoubleLine size={18} />
//               </div>
//               <p className="font-semibold md:text-center text-lefttext-gray-600 text-xs md:text-lg lg:text-[14px]">Right</p>{" "}
//             </div>
//           </div>

//           <div className="border-l-2 text-left px-2  full h-16">
//             <p className="font-semibold md:text-center text-left text-red-600 text-sm md:text-lg  ">0/30</p>

//             <div className="flex md:justify-center gap-1 py-2 items-center">
//               <RxCrossCircled size={15} />
//               <p className="font-semibold md:text-center text-lefttext-gray-600  text-xs md:text-lg lg:text-[14px]">
//                 Wrong
//               </p>{" "}
//             </div>
//           </div>

//           <div className="border-l-2  text-left px-2  full h-16">
//             <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">0/30</p>

//             <div className="flex md:justify-center gap-1 items-center">
//               <SiSimpleanalytics size={12} />
//               <p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
//                 Score
//               </p>{" "}
//             </div>
//           </div>

//           <div className="border-l-2  text-left px-2 full h-16">
//             <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">00:00:05</p>

//             <div className="flex md:justify-center gap-1 items-center">
//               <RiTimerLine size={18} />
//               <p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
//                 Time
//               </p>{" "}
//             </div>
//           </div>

//           <div className="border-l-2  text-left px-2  full h-16">
//             <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">0%</p>

//             <div className="flex md:justify-center gap-2 items-center">
//               <GiChart size={14} />
//               <p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
//                 Accuracy
//               </p>{" "}
//             </div>
//           </div>

//           <div className=" border-l-2  text-left px-2  full h-16">
//             <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">10%</p>

//             <div className="flex  md:justify-center gap-1 items-center">
//               <BsPercent />
//               <p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
//                 Percentile
//               </p>{" "}
//             </div>
//           </div>

//           <div className="  border-l-2  text-left px-2  full h-16">
//             <p className="font-semibold md:text-center text-left text-green-600  text-sm md:text-lg  ">0/30</p>

//             <div className="flex md:justify-center gap-1 py-2 "> 
//               <div className="flex items-center ">
//                 {" "}
//                 <RiCheckDoubleLine size={18} />
//               </div>
//               <p className="font-semibold md:text-center text-lefttext-gray-600 text-xs md:text-lg lg:text-[14px]">
//                 Attempted
//               </p>{" "}
//             </div>
//           </div>

//           <div className="border-l-2  text-left px-2  full h-16">
//             <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">45/9252</p>

//             <div className="flex md:justify-center gap-1 items-center">
//               <BsListStars size={18} />
//               <p className="font-semibold text-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
//                 Rank
//               </p>{" "}
//             </div>
//           </div>
//         </div>

        
//         {/* mobile view */}
//      <Mobileview/>
//       </div>
//       {/* Blow */}
   
  
      
//       <div className="border hidden md:block rounded from-red-500 mt-6">

//       <div
//         className="grid grid-cols-4 lg:grid-cols-7 
//  mt-7 flex-wrap  px-3 r font-semibold  "
//       >
//           <p className="py-3 px-2 whitespace-nowrap">Section Name</p>
// {header.map(({icon,id,title})=>
// <p key={id} className="font-semibold text-gray-600  text-[14px] text-center py-3  w-full grid place-items-center">
//   <span>{icon}</span>
//   {title}
// </p>
// )}
//       </div>



//       <div
//         className="grid grid-cols-4 lg:grid-cols-7
//          w-full  mt-2 px-3 "
//       >
//         <div className="  font-semibold ">
//           <p className="py-2 px-3">Total</p>
//         </div>

//         <div className="   px-4 py-3  w-full grid place-items-center text-center">
//           <p className="text-green-600">0/30</p>
//         </div>

//         <div className=" px-4 py-3  w-full grid place-items-center text-center">
//           <p className="text-red-600">0/30</p>
//         </div>

//         <div className=" px-4 py-3  w-full grid place-items-center text-center">
//           <p>0/30</p>
//         </div>

//         <div className=" px-4 py-3  w-full grid place-items-center text-center">
//           <p className="whitespace-nowrap">00m 05s</p>
//         </div>

//         <div className="  py-3 px-4 grid place-items-center text-center">
//           <p>0%</p>
//         </div>

//         <div className=" px-4 py-3  w-full grid place-items-center text-center">
//           <p>45</p>
//         </div>







//       </div>

//       </div>



//       <div className="mt-4 grid grid-cols-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         <div className="w-full py-2 px-2 mx-auto  border rounded-md">
//           <div className="flex gap-2 justify-center ">
//             <div className="flex items-center  text-[green]">
//               {" "}
//               <RiCheckDoubleLine size={18} />
//             </div>
//             <p className=" font-semibold ">Correct </p>
//           </div>
//           <div className="h-32 w-32 mx-auto mt-1 ">
//             <PieChart />
//           </div>

//           <div className="flex py-2 gap-2 text-[15px] justify-center font-semibold">
//             <p>83.00% </p>
//             <p>
//               <span className="text-[green]">164</span>/200
//             </p>
//           </div>
//         </div>

//         <div className="w-full py-2 px-2 mx-auto  border rounded-md ">
//           <div className="flex gap-2 justify-center">
//             <div className="flex items-center  text-[red]">
//               {" "}
//               <FaRegTimesCircle size={18} />
//             </div>
//             <p className=" font-semibold ">Incorrect </p>
//           </div>
//           <div className="h-32 w-32 mx-auto mt-1  ">
//             <WrongAnsPie />
//           </div>

//           <div className="flex gap-2 py-2 text-[15px] justify-center font-semibold">
//             <p>53.00% </p>
//             <p>
//               <span className="text-[red]">12</span>/200
//             </p>
//           </div>
//         </div>

//         <div className="w-full py-2 px-2 mx-auto  border rounded-md">
//           <div className="flex gap-2 justify-center">
//             <div className="flex items-center  text-[#ff9900]">
//               {" "}
//               <FiFlag size={18} />
//             </div>
//             <p className=" font-semibold ">Left</p>
//           </div>
//           <div className="h-32 w-32 mx-auto mt-1 ">
//             <LeftAnsPie />
//           </div>

//           <div className="flex gap-2 py-2 text-[15px] justify-center font-semibold">
//             <p>63.00% </p>
//             <p>
//               <span className="text-[#ff9900]">46</span>/200
//             </p>
//           </div>
//         </div>

//         <div className="w-full py-2 px-2 mx-auto  border rounded-md">
//           <div className="flex gap-2 justify-center">
//             <div className="flex items-center  text-[#0077ff]">
//               {" "}
//               <AiTwotoneStar size={18} />
//             </div>
//             <p className=" font-semibold ">Accuracy </p>
//           </div>
//           <div className="h-32 w-32 mx-auto mt-1 ">
//             <AccuracyChart />
//           </div>

//           <div className="flex gap-2 py-2 text-[15px] justify-center font-semibold">
//             <p>23.00% </p>
//             <p>
//               <span className="text-[#0077ff]">75</span>/200
//             </p>
//           </div>
//         </div>

//       </div>



//     {/* chapter section  */}


//     <div className="hidden md:block">
   
//     <h1 className="font-semibold py-2 hidden md:block mt-2 text-start text-[19px] ">
//          Chapter's  Performance Analysis
//         </h1>
// <div
//         className="grid grid-cols-4 lg:grid-cols-7
//        w-full  mt-2 px-3 border  border-gray-200"
//       >
//         <div className="  font-semibold ">
//           <p className="py-2 px-3">Section 1</p>
//         </div>

//         <div className="   px-4 py-3  w-full grid place-items-center">
//           <p className="text-green-600">Correct 7</p>
//         </div>

//         <div className=" px-4 py-3  w-full grid place-items-center">
//           <p className="text-red-600">Incorrect 2</p>
//         </div>

//         <div className=" px-4 py-3  w-full grid place-items-center">
//           <p>Score 24</p>
//         </div>

    

//         <div className="  py-3 px-4 grid place-items-center">
//           <p>Accuracy 34%</p>
//         </div>

//         <div className="whitespace-nowrap  py-3 px-4 grid place-items-center">
//           <p>Total questions 55</p>
//         </div>
//       </div> 

//         <div
//         className="grid grid-cols-4 lg:grid-cols-7
//        w-full  mt-2 px-3 "
//       >
//         <div className="  font-semibold ">
//           <p className="py-2 px-3">Chapter 1</p>
//         </div>

//         <div className="   px-4 py-3  w-full grid place-items-center">
//           <p className="text-green-600">0/30</p>
//         </div>

//         <div className=" px-4 py-3  w-full grid place-items-center">
//           <p className="text-red-600">0/30</p>
//         </div>

//         <div className=" px-4 py-3  w-full grid place-items-center">
//           <p>0/30</p>
//         </div>

    

//         <div className="  py-3 px-4 grid place-items-center">
//           <p>0%</p>
//         </div>
//       </div> 
//       <div
//         className="grid grid-cols-4 lg:grid-cols-7
//         w-full  mt-2 px-3 bg-gray-100"
//       >
//         <div className="  font-semibold ">
//           <p className="py-2 px-3">Chapter 2</p>
//         </div>
//         <div className="   px-4 py-3  w-full grid place-items-center">
//           <p className="text-green-600">0/30</p>
//         </div>
//         <div className=" px-4 py-3  w-full grid place-items-center">
//           <p className="text-red-600">0/30</p>
//         </div>
//         <div className=" px-4 py-3  w-full grid place-items-center">
//           <p>0/30</p>
//         </div>
      
//         <div className="  py-3 px-4 grid place-items-center">
//           <p>0%</p>
//         </div>
//           </div>
//       <div
//         className="grid grid-cols-4 lg:grid-cols-7
//          w-full mt-2  px-3 md:mx-aut"
//       >
//         <div className="  font-semibold ">
//           <p className="py-2 px-3 ">Chapter 3</p>
//         </div>
//         <div className="   px-4 py-3  w-full grid place-items-center">
//           <p className="text-green-600">0/30</p>
//         </div>
//         <div className=" px-4 py-3  w-full grid place-items-center">
//           <p className="text-red-600">0/30</p>
//         </div>
//         <div className=" px-4 py-3  w-full grid place-items-center">
//           <p>0/30</p>
//         </div>
    
//         <div className="  py-3 px-4 grid place-items-center">
//           <p>0%</p>
//         </div>      
//       </div>
//       </div>


// {/* 
//       Chapter mobile view */}

// <div className="md:hidden block">
   
//    <h1 className="font-semibold py-2  mt-2 text-start text-[19px] ">
//         Chapter's  Performance Analysis
//        </h1>





// <div
//        className="grid grid-cols-3 lg:grid-cols-7
//       w-full   px-3 "
//      >
//        <div className="border-b-2 border-r-2 font-semibold ">
//          <p className="py-2 px-0">Section 1</p>
//        </div>

//        <div className="   px-2 py-0 border-b-2 border-r-2  w-full grid place-items-center">
//          <p className="text-green-600">Correct 7</p>
//        </div>

//        <div className=" border-b-2 px-4 py-3  w-full grid place-items-center">
//          <p className="text-red-600">Incrrect 12</p>
//        </div>
//      </div> 

//        <div
//        className="grid grid-cols-3 lg:grid-cols-7
//       w-full   px-3 "
//      >
//        <div className="border-b-2 border-r-2 font-semibold ">
//          <p className="py-2 px-0">Chapter 1</p>
//        </div>

//        <div className="   px-2 py-0 border-b-2 border-r-2  w-full grid place-items-center">
//          <p className="text-green-600">0/30</p>
//        </div>

//        <div className=" border-b-2 px-4 py-3  w-full grid place-items-center">
//          <p className="text-red-600">0/30</p>
//        </div>
//      </div> 


//      <div
//        className="grid grid-cols-3 lg:grid-cols-7
//        w-full   px-3 bg-gray-100"
//      >
//        <div className="border-b-2 border-r-2 font-semibold ">
//          <p className="py-2 px-0">Chapter 2</p>
//        </div>
//        <div className="   px-2 py-0 border-b-2  border-r-2 w-full grid place-items-center">
//          <p className="text-green-600">0/30</p>
//        </div>
//        <div className=" border-b-2 px-4 py-3  w-full grid place-items-center">
//          <p className="text-red-600">0/30</p>
//        </div>
  
//          </div>
//      <div
//        className="grid grid-cols-3 lg:grid-cols-7
//         w-full   px-3 md:mx-aut"
//      >
//        <div className="border-b-2 border-r-2 font-semibold ">
//          <p className="py-2 px-0">Chapter 3</p>
//        </div>
//        <div className=" px-2 py-0 border-r-2 border-b-2 w-full grid place-items-center">
//          <p className="text-green-600">0/30</p>
//        </div>
//        <div className=" px-4 py-3 border-b-2 w-full grid place-items-center">
//          <p className="text-red-600">0/30</p>
//        </div>    
//      </div>
//      </div>
//    </Container>



//   <button className="flex md:hidden justify-center mx-auto w-[90%] h-9 px-4 py-2 mb-7  mt-2 rounded-md bg-yellow-400 hover:bg-yellow-300">Reattempt Test</button>



//    </>
<>

<h3>hii</h3></>
  );
};

export default Result;