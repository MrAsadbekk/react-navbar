import React from "react";
import { Link } from "react-router-dom";
import "../Card/card.scss";

const Card = (props) => {
  const { title, url, alt, name } = props;

  return (
    <div className="card">
      <img className="card__img" src={url} alt={alt} />
      <p className="card__title">{title}</p>
      <Link to={`name/${name}`}>Read More</Link>
    </div>
  );
};

export default Card;
