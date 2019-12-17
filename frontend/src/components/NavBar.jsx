import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavBar.scss";

function NavBar() {
  const [menuIsOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="TopBar">
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
            <li>
              <NavLink activeClassName="active" to="/products">
                Produits
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div
            className="BurgerMenu"
            onClick={() => {
              setOpen(!menuIsOpen);
            }}
          >
            <span className={menuIsOpen ? "isCrossed" : ""}></span>
          </div>
        </nav>
      </div>

      <div className={menuIsOpen ? "BurgerPanel isOpen" : "BurgerPanel"}>
        <img src="/img/logo.png" alt="" />

        <ul className="MobileMenu">
          <li>
            <NavLink
              activeClassName="active"
              exact
              to="/"
              onClick={() => {
                setOpen(!menuIsOpen);
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/products"
              onClick={() => {
                setOpen(!menuIsOpen);
              }}
            >
              Produits
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/portfolio"
              onClick={() => {
                setOpen(!menuIsOpen);
              }}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/contact"
              onClick={() => {
                setOpen(!menuIsOpen);
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <nav className="MobileSocialsNav">
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
    </header>
  );
}

export default NavBar;
