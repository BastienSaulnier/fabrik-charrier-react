import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="Footer">
      <div className="HeadFoot">
        <ul className="FootAdress">
          <li>
            <i className="fas fa-user"></i>
            <p>Fabrik-Charrier</p>
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <p>
              5189 Chaussée Brenehaut
              <br />
              622040 Longfossé
            </p>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:+33677900823">06 77 90 08 23</a>
          </li>
          <li>
            <i className="fas fa-at"></i>
            <a href="mailto:lafabrik.ebeniste@gmail.com">
              lafabrik.ebeniste@gmail.com
            </a>
          </li>
        </ul>
        <div className="FootSocials">
          <strong>à Propos</strong>
          <hr />
          <div className="FootInfos">
            <p>
              La Fabrik-Charrier est une SARL fondée en 2018 par Guillaume
              Charrier. Forte de ses XX ans d'expérience, et passionés par
              l'artisanat, nous sommes prêts à répondre à toutes vos demandes et
              vous acompagner dans l'élaboration de votre projet.
            </p>
            <ul className="Socials">
              <li>
                <a
                  href="https://www.facebook.com/la.fabrik.charrier"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="fb"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/fabrikcharrier/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="inst"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:lafabrik.ebeniste@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="gmail"
                >
                  <i className="fas fa-envelope-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Foot">
        <p>
          <strong>
            <Link to="/">lafabrikcharrier.com</Link>
          </strong>{" "}
          made with <i className="fas fa-heart"></i> by{" "}
          <strong>Bastien Saulnier</strong> from{" "}
          <strong>
            <a
              href="https://www.wildcodeschool.com/fr-FR"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wild Code School
            </a>
          </strong>
          , Copyright 2019.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
