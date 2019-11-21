import React from "react";
import HeroPages from "../HeroPages";
import ContactForm from "../ContactForm";
import TraditionalAdress from "../TraditionalAdress";
import MapIFrame from "../MapIFrame";
import "./Contact.scss";

function Contact() {
  return (
    <div className="Container">
      <HeroPages l1="C" l2="O" l3="N" l4="T" l5="A" l6="C" l7="T" />

      <div className="Contact">
        <ContactForm />
        <TraditionalAdress />
      </div>

      <MapIFrame />
    </div>
  );
}

export default Contact;
