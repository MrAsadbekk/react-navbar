import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleArticle = () => {
  const { name } = useParams();

  const [newsData, setNewsData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      setNewsData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(newsData);
  }, []);

  return (
    <div>
      <div>
        {console.log(newsData)}
        {/* <img src={newsData[0].flags.png} alt="" /> */}
        <div>
          <h1>{newsData[0].name.common}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
