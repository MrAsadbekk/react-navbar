import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/twitterLogo.svg";
import profile from "../../images/navbar_box_img.png";
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
            <NavLink className="navbar__nav-link navbar__nav_link-one" to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/Explore"}
              className="navbar__nav-link navbar__nav_link-two"
            >
              Explore
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/Notofications"}
              className="navbar__nav-link navbar__nav_link-three"
            >
              Notofications
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/Messages"}
              className="navbar__nav-link navbar__nav_link-four"
            >
              Messages
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/Bookmarks"}
              className="navbar__nav-link navbar__nav_link-fiwe"
            >
              Bookmarks
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/Lists"}
              className="navbar__nav-link navbar__nav_link-six"
            >
              Lists
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/Account"}
              className="navbar__nav-link navbar__nav_link-seven"
            >
              Profile
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__nav-link navbar__nav_link-eight">
              More
            </NavLink>
          </li>
        </ul>
        <button className="navbar__btn">Tweet</button>
      </nav>
      <div className="navbar__box">
        <img className="navbar__box-img" src={profile} alt="" />
        <div className="navbar__minibox">
          <div>
            <h3 className="navbar__minibox-title">Bobur</h3>
            <p className="navbar__minibox-text">@bobur_mavlonov</p>
          </div>
          <button className="navbar__box-btn" href="#"></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
