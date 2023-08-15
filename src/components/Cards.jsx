import React, { useEffect, useState } from "react";

import axios from "axios";

function Cards() {
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises",
      headers: {
        "X-RapidAPI-Key": "c019527144msh927a51e11d098d6p15543ajsn01fd8a946881",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
      },
    };

    const response = await axios.request(options);
    setResponseData(response.data);
  };

  const first20Elements = responseData.slice(0, 20);

  return (
    <div className="flex flex-wrap">
      {first20Elements.map((value, index) => (
        <div className="max-w-sm rounded-lg mt-4 mx-4" key={index}>
          <a href="#">
            <img className="rounded-t-lg" src={value.gifUrl} alt="" />
          </a>
          <div className="p-5 border border-white rounded-b-lg">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Exercise Name: {value.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Muscle target: {value.target}
            </p>
            <a
              href="#"
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
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
