import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Scrollingbar from "./Scrollingbar/Scrollingbar";
import Mainright from "./Main/Mainright";
import Mainmap from "./Main/Mainmap";
import { assets } from "@assets/assets";

const Dashboard = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    "linear-gradient(to bottom, #FFFFFF, #32CD32)"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [playButtonRotated, setPlayButtonRotated] = useState(false);

  const handleButtonClick = (color) => {
    setBackgroundColor(`linear-gradient(to bottom, #FFFFFF, ${color})`);
  };

  const handlePlayButtonClick = () => {
    setIsOpen(!isOpen);
    setPlayButtonRotated(!playButtonRotated);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".play-button, .circular-button")) {
      setBackgroundColor("linear-gradient(to bottom, #FFFFFF, #32CD32)");
      setIsOpen(false);
      setPlayButtonRotated(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  

  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: backgroundColor,
      }}
    >
      <Navbar />
      <Scrollingbar />
      <Mainright />
      <Mainmap />
      <button
        className="flex absolute z-10 bg-black rounded-full w-12 h-12 mt-1 top-[190px] left-[1060px] play-button"
        onClick={handlePlayButtonClick}
      >
        <img
          src={assets.play}
          className="justify-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: playButtonRotated
              ? "translate(-50%, -50%) rotate(90deg)"
              : "translate(-50%, -50%) rotate(0deg)",
          }}
        />
      </button>
      {isOpen && (
        <div
          className="absolute bg-gray-700 w-[380px] h-[280px] p-4 pt-5 rounded-lg rounded-tr-[30px] shadow-md"
          style={{
            top: "195px",
            left: "727px",
            animation: "slideDown 0.5s forwards",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col bg-white w-[350px] h-[250px] text-black justify-center rounded-lg py-4 px-6"
          
          >
            <button
              className="flex w-full h-full mb-2 circular-button"
              onClick={() => handleButtonClick("#FF0000")}
            >
              <img src={assets.warning} className="w-10 h-10 mr-2" />
              <a className="text-lg">Risk-Zone Mapping</a>
            </button>

            <button
              className="flex w-full h-full p-1 mb-2 circular-button"
              onClick={() => handleButtonClick("#ff69b4")}
            >
              <img src={assets.earthImage} className="w-10 h-10 mr-2" />
              <a className="text-lg">EarthQuakes</a>
            </button>
            
            <button
              className="flex w-full h-full p-1 mb-0 circular-button"
              onClick={() => handleButtonClick("#0000FF")}
            >
              <img src={assets.volunteering} className="w-10 h-10 mr-2" />
              <a className="text-lg">NGO Connects</a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;