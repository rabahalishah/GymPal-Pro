import React from "react";
import "./navBar.css";
import Cards from "./Cards";
function Content() {
  return (
    <div>
      <div
        className="bg-cover overflow-hidden bg-no-repeat h-screen"
        style={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp10124759.jpg")`,
        }}
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-end mt-36 mr-96 text-8xl navFont">
            NOTHING <br />
            WILL WORK
            <br />{" "}
            <span className="text-yellow-400">
              UNLESS
              <br /> YOU DO
            </span>
          </h1>
        </div>
        <div className="flex justify-end">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded mr-96 mt-4">
            Search
          </button>
        </div>
      </div>
      <Cards />
    </div>
  );
}

export default Content;
