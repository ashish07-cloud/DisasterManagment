import React from "react";

const Mainright = () => {
  return (
    <div className="relative gap-8">
     

      {/* MAIN RIGHT PART GOVERNMENT LINKS AND WEATHER   */}

      {/* GOVERNMENT LINKS */}

      <div
        className="absolute top-50 right-4 w-[350px] h-356 bg-gray-400 rounded-md p-4 shadow-md"
        style={{ zIndex: 1 }}
      >
        <h5 className="text-lg font-bold mb-2">Government Links</h5>
        <ul>
          <li>
            <a
              href="https://mausam.imd.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out"
            >
              Meteorological Department
            </a>
          </li>
          <li>
            <a
              href="https://seismo.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out"
            >
              Sesmological Department
            </a>
          </li>
          <li>
            <a
              href="https://ndrf.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out"
            >
              NDRF
            </a>
          </li>
          <li>
            <a
              href="https://ndma.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out"
            >
              NDMA
            </a>
          </li>
        </ul>
      </div>

      {/* WEATHER DATA  */}

      <div className="absolute top-44 right-4  w-[350px] h-[430px] bg-gray-300 rounded-md p-4 shadow-md">
        <h5 className="text-lg font-bold mb-2">Today's Weather Forecast</h5>
        {/* Add your weather forecast content here */}
        <div>
          {/* You can add your weather forecast data, charts, or other content here */}
        </div>
      </div>
    </div>
  );
};

export default Mainright;
