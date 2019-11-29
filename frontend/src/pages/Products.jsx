import React from "react";
import HeroPages from "../components/HeroPages";
import TitleProducts from "../components/TitleProducts";
import SlickSlider from "../components/SlickSlider";
import "./styles/Products.scss";

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
