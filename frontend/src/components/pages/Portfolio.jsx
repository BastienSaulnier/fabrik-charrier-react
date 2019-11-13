import React from "react";
import HeroPages from "../HeroPages";
import ReactLightbox from "../ReactLightbox";
import "./Portfolio.scss";

function Portfolio() {
  return (
    <div className="Container">
      <HeroPages
        l1="P"
        l2="O"
        l3="R"
        l4="T"
        l5="F"
        l6="O"
        l7="L"
        l8="I"
        l9="O"
      />
      <div className="Portfolio">
        <ReactLightbox />
      </div>
    </div>
  );
}

export default Portfolio;
