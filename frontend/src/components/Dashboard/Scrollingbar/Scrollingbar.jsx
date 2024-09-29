import React from "react";

const Scrollingbar = () => {
  return (
    <div
      className="w-full h-11 overflow-hidden mt-0 "
      style={{
        backgroundImage: "linear-gradient(to right, #7A288A, #F7F7F7)",
        backgroundSize: "100% 100%",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="flex items-center h-full">
        <p className="text-lg font-bold text-black whitespace-nowrap animate-marquee">
          Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
          Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
          Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
          Alert Alert Alert Alert Alert
        </p>
      </div>
    </div>
  );
};

export default Scrollingbar;
