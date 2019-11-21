import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  const [menuIsOpen, setOpen] = useState(false);
  const [burgerIsCrossed, setCrossed] = useState(false);
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
          <div
            className="BurgerMenu"
            onClick={() => {
              setOpen(!menuIsOpen);
              setCrossed(!burgerIsCrossed);
            }}
          >
            <span className={burgerIsCrossed ? "isCrossed" : ""}></span>
          </div>
        </nav>
      </div>

      <div className={menuIsOpen ? "BurgerPanel isOpen" : "BurgerPanel"}>
        <p>
          <img src="/img/logo.png" alt="" /> MENU
          <img src="/img/logo.png" alt="" />
        </p>

        <ul className="MobileMenu">
          <li>
            <NavLink
              activeClassName="active"
              exact
              to="/"
              onClick={() => {
                setOpen(!menuIsOpen);
                setCrossed(!burgerIsCrossed);
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/Products"
              onClick={() => {
                setOpen(!menuIsOpen);
                setCrossed(!burgerIsCrossed);
              }}
            >
              Produits
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/Portfolio"
              onClick={() => {
                setOpen(!menuIsOpen);
                setCrossed(!burgerIsCrossed);
              }}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/Contact"
              onClick={() => {
                setOpen(!menuIsOpen);
                setCrossed(!burgerIsCrossed);
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
