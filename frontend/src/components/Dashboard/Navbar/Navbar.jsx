import React, { useState, useEffect } from "react";
import { assets } from "../../../assets/assets";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  const handleSidebarClickOutside = (event) => {
    if (!event.target.closest(".sidebar")) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleSidebarClickOutside);
    return () => {
      document.removeEventListener("click", handleSidebarClickOutside);
    };
  }, [showSidebar]);

  return (
    <div
      className="flex flex-row mb-2"
      style={{
        backgroundImage: "linear-gradient(to right, #040404, #545454, #84512D, #AD4F0B, #FF7800)",
        backgroundSize: "100% 100%",
        height: "62px" /* adjust the height as needed */,
      }}
    >
      <img className="w-15px h-20px" src={assets.RA_logo_new} alt="logo" />

      <h1 className="text-4xl mx-auto font-bold font-serif flex items-center justify-center h-full text-white">
        Rapid Alert
      </h1>

      <div className="flex relative">
        <img
          className="w-10px h-10px mt-3 mb-3 cursor-pointer"
          src={assets.userr}
          alt="user"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        />
        {showSidebar && (
          <div
            className={`absolute top-9 right-7 z-10 w-64 h-[200px] bg-gray-200 border border-black outline outline-black transition duration-300 ease-in-out ${
              showSidebar ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4">
              <input
                type="number"
                placeholder="Your Phone Number"
                className="w-full p-2 pl-10 text-sm text-gray-700 mb-4"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full p-2 pl-10 text-sm text-gray-700 mb-4"
              />
              <div className="flex justify-center">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
