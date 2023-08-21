import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

import axios from "axios";
function Cards() {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let ids = [];

  function favouriteHandler(event) {
    console.log("clicked on fav icon");
    const exerciseId = event.currentTarget.id;
    console.log("Id of the card is", exerciseId);
    console.log("The type of Id of the card is", typeof event.currentTarget.id);
    ids.push(event.currentTarget.id);
    console.log("Id array", ids);
    let unique = [...new Set(ids)];

    console.log("unique array from card.js", unique);

    localStorage.setItem("unique ids", JSON.stringify(unique));
  }

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      headers: {
        'X-RapidAPI-Key': 'b62e14c3bcmshbf6193c06a615cbp1018aajsn7a508111c548',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    

    const response = await axios.request(options);
    // const response = await axios.request();
    setResponseData(response.data);
  };

  const first20Elements = responseData.slice(0, 20);

  return (
    <div className="flex flex-wrap justify-center">
      {first20Elements.map((item, index) => (
        <div className="max-w-sm rounded-lg mt-4 mx-4" key={index}>
          <a href="#">
            <img className="rounded-t-lg" src={item.gifUrl} alt="" />
          </a>
          <div className="p-5 border border-white rounded-b-lg ">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Exercise Name: {item.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Muscle target: {item.target}
            </p>
            <div className="flex gap-x-40">
              <Link
                to={`/detail/${item.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg hover:bg-yellow-300 focus:ring-4 focus:outline-none "
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
              <button id={item.id} onClick={favouriteHandler}>
                <FcLike />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
