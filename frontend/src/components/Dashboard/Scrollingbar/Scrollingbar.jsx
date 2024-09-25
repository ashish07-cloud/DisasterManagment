import React from "react";

const Scrollingbar = () => {
  return (
    <div className="w-full h-12 overflow-hidden  mt-0 bg-gray-300 rounded-md">
    <div className="flex items-center h-full">
      <p className="text-lg font-bold text-gray-600 whitespace-nowrap animate-marquee">
        Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert   Alert 
        Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert  Alert 
      </p>
    </div>
  </div>
  
  );
};

export default Scrollingbar;
