import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "../Home/home.scss";

const Home = () => {
  const [newsData, setNewsData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      // console.log(response.data);
      setNewsData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const myData = newsData.map((news) => (
    // console.log(news.name.common)
    <Card
      key={news.name.common}
      title={news.name.common}
      url={news.flags.png}
      alt={news.flags.alt}
      name={news.name.common}
    />
  ));

  return (
    <div className="container">
      <h1>Card</h1>
      <div className="home__box">{myData}</div>
    </div>
  );
};

export default Home;
