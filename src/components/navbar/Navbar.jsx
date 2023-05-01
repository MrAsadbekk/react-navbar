import React from "react";
import Logo from "../../images/twitterLogo.svg";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar__logo" href="/">
        <img src={Logo} alt="logotip" />
      </a>
      <nav className="navbar__nav">
        <ul className="navbar__list">
          <li className="navbar__item">
            <a className="navbar__nav-link" href="#">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__nav-link" href="#">
              Explore
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__nav-link" href="#">
              Notification
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__nav-link" href="#">
              Messages
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__nav-link" href="#">
              Bookmarks
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__nav-link" href="#">
              Lists
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__nav-link" href="#">
              Profile
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__nav-link" href="#">
              More
            </a>
          </li>
        </ul>
        <button className="navbar__btn">Twwet</button>
      </nav>
      <div className="navbar__box">
        <img className="navbar__box-img" src="" alt="" />
        <div className="navbar__minibox">
          <div>
            <h3 className="navbar__minibox-title"></h3>
            <p className="navbar__minibox-text"></p>
          </div>
          <a className="navbar__box-link" href="#"></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
