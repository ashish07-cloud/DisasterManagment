import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Dashboard from "../Dashboard/Dashboard";


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    //  API call to verify the phone number and OTP
    // i have  set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.background})` }}
    >
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <div>
          <div className="flex justify-start pt-0 pl-0">
            <img src={assets.RA_logo} alt="Logo" className="h-20 w-31" />
          </div>

          <div className="flex flex-col h-[200px] w-[800px] gap-0 ">
            <div className="h-[100px] w-[430px] ml-[170px] left-10 p-2 ">
              <h2 className="text-7xl  font-bold mt-4 mb-1">Welcome to </h2>
            </div>

            <div className=" h-[100px] w-[430px] ml-[400px] p-2">
              <h2 className="text-7xl font-bold text-orange-400 mb-1"> Rapid Alert!</h2>
            </div>

            <div className="absolute h-[330px] w-[500px] ml-[822px]  mt-[42px] ">
              <div className=" pt-2 pl-2">
                <img src={assets.tornado} alt="Logo" style={{ width: '450px', height: '380px' }} />
              </div>
            </div>
            <div className="absolute flex bg-gray-700 opacity-75 w-[360px] h-[300px] ml-[610px] mt-[290px] gap-8  flex-col mb-2 p-4 rounded-lg">
              <div>
                <p className="text-white uppercase font-bold">Phone number</p>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-[328px] h-[38px] rounded-md p-2"
                />
              </div>
              <div>
                <p className="text-white uppercase font-bold">OTP</p>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Please enter otp"
                  className="w-[328px] h-[38px] rounded-md p-2"
                />
              </div>
              <div className="bg-orange-500 mt-5 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded flex justify-center"
              onClick={handleLogin}>
                <button className="uppercase" >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;