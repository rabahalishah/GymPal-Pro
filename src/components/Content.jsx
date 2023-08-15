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
      <div className="m-6">
        <div className="text-center mb-10 navFont text-6xl">
          <h1>
            Most <span className="text-yellow-400">Effective</span> Exercises{" "}
            <br /> You Must Try
          </h1>
        </div>
        <form className="mb-12 flex justify-center flex-col">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="flex">
            <input
              type="search"
              id="default-search"
              className="block w-1/2 mx-auto p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white   dark:placeholder-gray-400 dark:text-white "
              placeholder="Search"
              required
            />
          </div>
          <button
            type="submit"
            className="text-black w-20 mx-auto mt-6 -mb-4 bg-yellow-400 hover:bg-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-400 navFont"
          >
            Search
          </button>
        </form>
      </div>
      <Cards />
    </div>
  );
}

export default Content;
