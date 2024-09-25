import React from 'react'
import { assets } from "../../../assets/assets";


const Searchbar = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-full max-w-md mx-auto p-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md"
          />
          <img
            src={assets.search}
            alt="Search icon"
            className="absolute top-1/2 right-3 transform -translate-y-1/2 w-6 h-6"
          />
        </div>
      </div>
    </div>
    
  )
}

export default Searchbar