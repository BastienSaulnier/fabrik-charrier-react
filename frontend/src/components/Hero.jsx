import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero(props) {
  return (
    <div className="Hero overlay">
      <div className="center">
        <div className="Title">
          <p>
            <span>{props.l1}</span>
            <span>{props.l2}</span>
            <span>{props.l3}</span>
            <span>{props.l4}</span>
            <span>{props.l5}</span>
            <span>{props.l6}</span>
            <span>{props.l7}</span>
            <span>{props.l8}</span>
            <span>{props.l9}</span>
          </p>
          <strong>
            sur <Link to="/">lafabrikcharrier.com</Link>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Hero;
