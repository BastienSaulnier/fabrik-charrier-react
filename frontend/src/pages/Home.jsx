import React from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import About from "../components/About";
import Selector from "../components/Selector";
import Work from "../components/Work";
import More from "../components/More";
import "./styles/Home.scss";

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
