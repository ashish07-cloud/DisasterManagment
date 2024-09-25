import React from "react";
import { assets } from "../../../assets/assets";

const Mainmap = () => {
  return (
    <div className="flex  left-0 shadow-md">
      <div className="bg-white rounded left-7 shadow-md p-4 w-[950px] h-[750px] relative border border-black">
        <img
          src={assets.map}
          alt="map"
          className="w-full h-full object-fit rounded"
        />
        
      </div>

      <div className="absolute top-2 right-2 z-10">
        
      </div>
    </div>
  );
}

export default Mainmap;
