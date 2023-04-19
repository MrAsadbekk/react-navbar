import { useState } from "react";
import menu from "../../images/menu.svg";
import "../navbar/navbar.scss";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(!show);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a className="navbar__logo" href="#">
          Navbar
        </a>
        <nav className={show ? "navbar__nav" : "navbar__nav open"}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                About Us
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Contask
              </a>
            </li>
          </ul>
          <button className="navbar__btn">Log In</button>
        </nav>
        <button className="navbar__menu-btn" onClick={handleOpen}>
          <img className="navbar__btn-img" src={menu} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
