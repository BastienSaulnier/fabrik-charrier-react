import React from "react";

function MapIFrame() {
  return (
    <div id="map" className="Map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.9302270309595!2d1.8396083159169545!3d50.65689838034839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ddcab053ac0afd%3A0xbb6cc86d32440cc1!2sVillage+des+M%C3%A9tiers+d&#39;Art+de+Desvres!5e1!3m2!1sfr!2sfr!4v1533126541735"
        title="Inline Frame Fabrik-Charrier Location"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default MapIFrame;
