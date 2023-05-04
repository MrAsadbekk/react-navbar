import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

import "../Home/Home.scss";
import profileImg from "../../images/navbar_box_img.png";
import commentImgOne from "../../images/commentImg1.png";
import commentImgTwo from "../../images/commentImg2.png";

const Home = () => {
  const { token, setToken } = useContext(AuthContext);

  const handleLogOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <div className="home__container">
      <div className="home__box-one">
        <h1 className="home__title">
          {token ? "Welcome" : "You are not registered"}
        </h1>
        {token ? (
          <button onClick={handleLogOut}>LogOut</button>
        ) : (
          <Link to={"/Login"}>Login</Link>
        )}
      </div>
      <div className="home__box-two">
        <img src={profileImg} alt="" />
        <div className="home__minibox">
          <textarea
            className="home__textarea"
            placeholder="What’s happening"
          ></textarea>
          <div className="home__minibox-two">
            <ul className="home__list-one">
              <li className="home__item-ome">
                <button className="home__text-btn home__text_btn-one"></button>
              </li>
              <li className="home__item-ome">
                <button className="home__text-btn home__text_btn-two"></button>
              </li>
              <li className="home__item-ome">
                <button className="home__text-btn home__text_btn-three"></button>
              </li>
              <li className="home__item-ome">
                <button className="home__text-btn home__text_btn-four"></button>
              </li>
              <li className="home__item-ome">
                <button className="home__text-btn home__text_btn-fiwe"></button>
              </li>
            </ul>
            <button className="home__send-btn">Tweet</button>
          </div>
        </div>
      </div>
      <div className="home__comment-box">
        <img src={commentImgOne} alt="" />
        <div className="home__comment-minibox">
          <div>
            <div className="home__comment_text-box">
              <p className="home__comment_text-one">
                Designsta
                <span className="home__comment_text-span">@inner · 25m</span>
              </p>
              <p className="home__comment_text-two">
                Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                zerikmadinglarmi?
              </p>
            </div>
            <button></button>
          </div>
          <ul className="home__btn-list">
            <li className="home__btn-item">
              <button className="home__comment-btn home__comment_btn-one"></button>
              <span className="home__comment-span"></span>
            </li>
            <li className="home__btn-item">
              <button className="home__comment-btn home__comment_btn-two"></button>
              <span className="home__comment-span"></span>
            </li>
            <li className="home__btn-item">
              <button className="home__comment-btn home__comment_btn-three"></button>
              <span className="home__comment-span"></span>
            </li>
            <li className="home__btn-item">
              <button className="home__comment-btn home__comment_btn-four"></button>
              <span className="home__comment-span"></span>
            </li>
            <li className="home__btn-item">
              <button className="home__comment-btn home__comment_btn-fiwe"></button>
              <span className="home__comment-span"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
