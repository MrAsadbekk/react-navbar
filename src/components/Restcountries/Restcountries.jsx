import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Restcountries/restcountries.scss";

const Restcountries = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>User Data</h1>
      <div className="box">
        {data.map((element) => (
          <div key={element.id} className="minibox">
            <img src={element.flags.png} alt={element.flags.alt} />
            <p>{element.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restcountries;
