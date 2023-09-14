import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="flex py-2 px-2 items-center">

      
      <div>
        <Image
          width={65}
          height={65}
   

       alt="user-profile"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"
        />
      </div>

      <div className="px-4">
        <h2 className="text-center text-[16px] font-semibold">
          Shivam Dubey
        </h2>
      </div>
    </div>
  );
};


export default Header;
