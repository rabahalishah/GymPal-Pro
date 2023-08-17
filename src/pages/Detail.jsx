import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detail() {
  const { excerciseId } = useParams();
  const [responseData, setResponseData] = useState([]);
  const [exeId, setExeId] = useState(excerciseId);
  console.log("id", exeId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setExeId(excerciseId);
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${exeId}`,
      headers: {
        'X-RapidAPI-Key': 'cfc72434f0mshad7a4de2db83f5dp1f53bajsncba28eb3912a',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    

    const response = await axios.request(options);
    setResponseData(response.data);
  };

  console.log("printing response data in detail.jsx", responseData);

  return (
    <div>
      {exeId}
      <div>{responseData.name}</div>
      <img src={responseData.gifUrl} alt="img"/>
      {responseData.target}
    </div>
  )
}

export default Detail;
