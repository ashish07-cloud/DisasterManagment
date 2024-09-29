import { assets } from "@assets/assets";
import React, { useState, useEffect } from "react";

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function UserWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // console.log(latitude, longitude);
        getWeatherData(latitude, longitude);
      });
    }
  };

  const getWeatherData = async (latitude, longitude) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      console.error(err);
      setError("Error fetching weather data");
    }
  };

  const handleSearch = async () => {
    if (searchInput) {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        setWeatherData(data);
        setError(null)
      } catch (err) {
        console.error(err);
        setError("Error fetching weather data");
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-0">
        <div className="w-full max-w-md mx-auto p-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search for a city..."
              className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <img
              src={assets.search}
              alt="Search icon"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 w-6 h-6"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>

      {weatherData && (
        <div
          id="weather-info"
          className="absolute top-[300px] right-4 w-[350px] h-[425px] bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 rounded-md p-4 shadow-2xl border border-white"
        >
          <h5 className="text-lg font-bold mb-2 text-center text-white">
            Today's Weather Forecast
          </h5>
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-row justify-between items-center gap-5">
              <h2 className="text-white text-center text-4xl">{weatherData.name}</h2>
              <img
                src={`https://flagcdn.com/144x108/${weatherData.sys.country.toLowerCase()}.png`}
                alt={weatherData.sys.country}
                className="w-10 h-8"
              />
            </div>
            <div className="flex  justify-center">
              <div className="flex items-center gap-2">
                <img
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt={weatherData.weather[0].description}
                  className="w-15 h-15"
                />
                <p className="text-white uppercase">
                  {weatherData.weather[0].description}
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <p className="text-white font-serif text-3xl">
                {weatherData.main.temp}°C
              </p>
            </div>
            <div className="flex justify-center mt-4  gap-3.5">
              <div className="bg-blue-200 h-[150px] p-3 rounded-lg">
              <img src={assets.humidity} className="w-13 h-14 pl-3"></img>
                <p className="text-center font-bold">Humidity: {weatherData.main.humidity}%</p>
              </div>
              <div className="bg-blue-200 h-[150px] p-3 rounded-lg">
              <img src={assets.wind} className="w-13 h-14 pl-3"></img>
                <p className="text-center font-bold">WindSpeed: {weatherData.wind.speed} m/s</p>
              </div>
              <div className="bg-blue-200 h-[150px] p-5 rounded-lg">
              <img src={assets.cloud} className="w-13 h-14"></img>
                <p className="text-center font-bold">Clouds: {weatherData.clouds.all}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute top-[300px] right-4 w-[350px] h-[425px] bg-red-500 rounded-md p-4 shadow-2xl border border-white">
          <img src={assets.error} alt="Error icon" className="w-20 h-20 mx-auto" />
          <p className="text-white text-center">{error}</p>
        </div>
      )}

      

      {/* government links  */}

      <div className="absolute top-[130px] right-4 w-[350px] h-400 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 rounded-md p-4 border border-white mt-0 fixed-top">
        <h5 className="text-lg font-bold mb-2 text-white">Government Links</h5>
        <ul>
          <li>
            <a
              href="https://mausam.imd.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Meteorological Department
            </a>
          </li>
          <li>
            <a
              href="https://seismo.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Sesmological Department
            </a>
          </li>
          <li>
            <a
              href="https://ndrf.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
            >
              NDRF
            </a>
          </li>
          <li>
            <a
              href="https://ndma.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
            >
              NDMA
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserWeather;
