import React from "react";
import Hero from "../Hero";
import Intro from "../Intro";
import About from "../About";
import Selector from "../Selector";
import Work from "../Work";
import More from "../More";
import "./Home.scss";

function Home() {
  return (
    <div className="Container">
      <Hero l1="B" l2="I" l3="E" l4="N" l5="V" l6="E" l7="N" l8="U" l9="E" />

      <Intro />

      <About />

      <Selector />

      <Work />

      <More />
    </div>
  );
}
export default Home;
