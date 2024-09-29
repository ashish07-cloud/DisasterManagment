import React from "react";
import { assets } from "../../../assets/assets";

const Mainmap = () => {
  return (
    <div>
      <div className="flex   w-[1100px] h-[539px] bg-white ml-4 shadow-md border border-black rounded-md">
        <div className="bg-white rounded  shadow-md    border border-black">
          <img
            src={assets.map}
            alt="map"
            className="w-full h-full object-fit rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Mainmap;
