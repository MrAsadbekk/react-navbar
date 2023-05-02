import React from "react";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__box-one">
        <h1>Home</h1>
      </div>
      <div className="home__box-two">
        <img src="" alt="" />
        <div className="home__minibox">
          <textarea placeholder="What’s happening"></textarea>
          <div className="home__minibox-two">
            <ul>
              <li>
                <button></button>
              </li>
              <li>
                <button></button>
              </li>
              <li>
                <button></button>
              </li>
              <li>
                <button></button>
              </li>
              <li>
                <button></button>
              </li>
            </ul>
            <button>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
