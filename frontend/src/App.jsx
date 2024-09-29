import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";

// function App() {
//   const [backgroundColor, setBackgroundColor] = useState("linear-gradient(to bottom, #FFFFFF, #32CD32)");

//   const changeBackground = () => {
//     setBackgroundColor("linear-gradient(to bottom, #FFFFFF, #FF0000)");
//   };

//   const resetBackground = () => {
//     setBackgroundColor("linear-gradient(to bottom, #FFFFFF, #32CD32)");
//   };

//   useEffect(() => {
//     document.addEventListener("click", (event) => {
//       if (!event.target.closest("button")) {
//         resetBackground();
//       }
//     });
//   }, []);

const App = () =>{

 return (
    <div
      // className=""
      // style={{
      //   backgroundImage: backgroundColor,
      //   backgroundSize: "100% 100%",
      // }}
    >
      
      <Login />

      {/* <button className="flex absolute bg-blue-900 rounded-full w-12 h-12 mt-1 top-[190px] left-[1060px]" 
      onClick={changeBackground}>c</button> */}
      </div>
  );

 }
export default App;
