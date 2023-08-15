import React from "react";
import "./navBar.css";
function NavBar() {
  return (
    <nav className="flex p-5 bg-black items-center">
      <div>
        {/* <img
          className="w-20 h-20 "
          src="https://www.freepnglogos.com/uploads/bodybuilder-png/png-psd-download-bodybuilder-vector-logo-4.png"
          alt="png psd download bodybuilder vector logo"
        /> */}
        <p className="text-yellow-400 text-4xl mr-4 font-bold navFont" >PUMP CLUB</p>
      </div>
      <div className="space-x-4 text-white text-2xl font-light navFont ml-10">
        <button className="hover:text-yellow-300">Home</button>
        <button className="hover:text-yellow-300">Exercises</button>
      </div>
    </nav>
  );
}

export default NavBar;
