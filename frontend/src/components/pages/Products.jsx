import React from "react";
import HeroPages from "../HeroPages";
import TitleProducts from "../TitleProducts";
import SlickSlider from "../SlickSlider";
import "./Products.scss";

function Products() {
  return (
    <div className="Container">
      <HeroPages l1="P" l2="R" l3="O" l4="D" l5="U" l6="I" l7="T" l8="S" />

      <TitleProducts />

      <SlickSlider />
    </div>
  );
}

export default Products;
