import React, { useState } from "react";

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

  return (
    <div
      className="flex flex-row bg-orange-400 h-16 mb-2"
      onClick={handleSidebarClickOutside}
    >
      <img className="w-15px h-20px" src={assets.logo} alt="logo" />

      <h1 className="text-3xl mx-auto flex items-center justify-center h-full">
        Rapid Alert
      </h1>

      <div className="flex">
        <img
          className="w-10px h-10px mt-3 mb-3 cursor-pointer"
          src={assets.user}
          alt="user"
          onClick={(e) => {
            e.stopPropagation(); 
            handleClick();
          }}
        />
        {showSidebar && (
          <div
            className={`absolute top-9 right-7 z-10 w-64 h-[200px] bg-gray-200 border border-black outline outline-black sidebar ${
              showSidebar ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 ">
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
