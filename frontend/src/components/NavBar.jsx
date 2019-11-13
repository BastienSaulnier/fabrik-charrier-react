import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <header>
      <div className="LeftNav">
        <div className="Logo">
          <strong>FABRIK-CHARRIER</strong>
          <h1>Conception &amp; Design d'ameublement</h1>
        </div>

        <nav className="SocialsNav">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/la.fabrik.charrier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fabrikcharrier/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:lafabrik.ebeniste@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope-square"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="WebsiteNav">
        <ul className="DesktopMenu">
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          {/*<li>
              <NavLink>News</NavLink>
            </li>*/}
          <li>
            <NavLink activeClassName="active" to="/Products">
              Produits
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/Portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/Contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="BurgerMenu">
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
