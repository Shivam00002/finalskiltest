import React from "react";
import Dot from "../Dot";


const Responses: React.FC = () => {
  return (
    <div className="flex items-center space-x-6 px-3 py-1">
      <div className="flex space-x-2 items-center">
        <Dot color={"green"} />
        <span>3</span>
      </div>
      <div className="flex space-x-2 items-center">

        <Dot color={"black"} />
        <span>33</span>
      </div>

      <div className="flex space-x-2 items-center">

        <Dot color={"gray"} />
        <span>47</span>
      </div>

      <div className="flex space-x-2 items-center">

        <Dot color={"orange"} />
        <span>13</span>
      </div>
    </div>
  );
};

export default Responses;
