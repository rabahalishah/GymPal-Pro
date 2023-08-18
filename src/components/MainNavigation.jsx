import React from "react";
import "./mainNavigation.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
function NavBar() {
  const { excerciseId } = useParams();
  console.log("exeId in main navigation",excerciseId)
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
        <NavLink to="/" className="hover:text-yellow-300">Home</NavLink>
        {!excerciseId && <a href="#search" className="hover:text-yellow-300 scroll-smooth">Exercises</a>}
        <NavLink to="/fav" className="hover:text-yellow-300">Favourite</NavLink>

      </div>
    </nav>
  );
}

export default NavBar;
