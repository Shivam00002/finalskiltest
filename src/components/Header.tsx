import React, { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import Link from "next/link";

export const Header= () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = async (): Promise<void> => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
       

 document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if(await document.exitFullscreen()) {
        document.exitFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="flex md:py-[10px] md:px-5 py-1 fixed px-3 w-full border justify-between overflow-hidden bg-white items-center">
      <div className="flex gap-10">
        <Link href="#" passHref>
          <Link href={""} className="w-[160px] md:w-[250px] h-[52px] relative inline-block -translate-x-4 cursor-pointer">
            <Image
              width={250}
              height={50}
              src="https://dev.collegementor.com/logo.svg?width=640&quality=75&format=webp"
              alt="logo"
              className="object-contain w-full h-full absolute left-3"
            />
          </Link>
        </Link>
        <h2 className="mt-3 text-[15px] flex font-semibold">
          UPSC Civil Services
          <span className="block md:hidden">....</span>
          <span className="hidden md:block">Prelims CSAT Full Test 4</span>{" "}
        </h2>
      </div>
      <div
        className="border md:ml-96 md:flex hidden right-0 px-2 py-0 gap-1 items-center h-10 bg-slate-100 cursor-pointer whitespace-nowrap"
        onClick={handleFullScreen}
      >
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>
          </svg>
        </div>
        <button>{isFullScreen ? "Exit Full Screen" : "Go Full Screen"}</button>
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
};

