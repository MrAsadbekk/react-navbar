import React from "react";
import "../Footer/Footer.scss";
import userImgOne from "../../images/footer_img1.png";
import userImgTwo from "../../images/footer_img2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__form">
        <input
          className="footer__search"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      <div className="footer__box-one">
        <div className="footer__minibox">
          <p className="footer__text">Trends for you</p>
          <button className="footer__btn-one"></button>
        </div>
        <div className="footer__minibox">
          <div>
            <p className="footer__text-one">Trending in Germany</p>
            <p className="footer__text-two">Revolution</p>
            <p className="footer__text-three">50.4K Tweets</p>
          </div>
          <button className="footer__btn-two"></button>
        </div>
        <div className="footer__minibox">
          <div>
            <p className="footer__text-one">Trending in Germany</p>
            <p className="footer__text-two">Revolution</p>
            <p className="footer__text-three">50.4K Tweets</p>
          </div>
          <button className="footer__btn-two"></button>
        </div>
        <div className="footer__minibox">
          <div>
            <p className="footer__text-one">Trending in Germany</p>
            <p className="footer__text-two">Revolution</p>
            <p className="footer__text-three">50.4K Tweets</p>
          </div>
          <button className="footer__btn-two"></button>
        </div>
        <a className="footer__link" href="#">
          Show more
        </a>
      </div>
      <div className="footer__box-two">
        <p className="footer__box-text">You might like</p>
        <div className="footer__minibox-two">
          <img className="footer__img" src={userImgOne} alt="User Img" />
          <div>
            <p className="footer__box_text-two">Mushtariy</p>
            <p className="footer__box_text-three">@Mushtar565266</p>
          </div>
          <button className="footer__minibox-btn">Follow</button>
        </div>
        <div className="footer__minibox-two">
          <img className="footer__img" src={userImgTwo} alt="User Img" />
          <div>
            <p className="footer__box_text-two">Shuhratbek</p>
            <p className="footer__box_text-three">@mrshukhrat</p>
          </div>
          <button className="footer__minibox-btn">Follow</button>
        </div>
        <a className="footer__box-link" href="#">
          Show more
        </a>
      </div>
      <p className="footer__bottom-text">
        Terms of Service Privacy Policy Cookie Policy
      </p>
      <p className="footer__bottom-text">
        Imprint Ads Info More ··· © 2021 Twitter, Inc.
      </p>
    </div>
  );
};

export default Footer;
