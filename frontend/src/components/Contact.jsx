import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      firstName: "",
      phone: "",
      email: "",
      street: "",
      postalCode: "",
      city: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let idInput = event.target.id;
    this.setState({
      [idInput]: event.target.value
    });
  }

  render() {
    return (
      <div className="Container">
        <div className="Hero-contact overlay-2">
          <div className="center">
            <div className="Title">
              <p>
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>T</span>
              </p>
              <strong>
                <Link to="/">lafabrikcharrier.com</Link>
              </strong>
            </div>
          </div>
        </div>
        <div className="Contact">
          <div className="Contact-form">
            <strong>Un projet ? Besoin d'informations ? D'un devis ?</strong>
            <hr />
            <br />
            <br />
            <p>
              La Fabrik-Charrier répond à vos demandes.
              <br />
              Merci de compléter les renseignements du formulaire. Nous vous
              contacterons dans les délais les plus brefs.
            </p>
            <form action="" method="POST" className="Contact-form">
              <span className="required">* Champs Requis</span>

              <label htmlFor="lastName">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Nom"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  required
                />
                <span className="required">*</span>
              </label>
              <label htmlFor="firstName">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Prénom"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  required
                />
                <span className="required">*</span>
              </label>

              <label htmlFor="phone">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="N&deg; de Téléphone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  required
                />
                <span className="required">*</span>
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Adresse e-mail"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <span className="required">*</span>
              </label>

              <label htmlFor="street">
                <input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="N&deg; + Nom de Rue"
                  value={this.state.street}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="postal-code">
                <input
                  type="text"
                  name="postal-code"
                  id="postalCode"
                  placeholder="Code Postal"
                  value={this.state.postalCode}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="city">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Ville"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="message">
                <textarea
                  name="Comment"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Votre Message / Projet"
                  value={this.state.message}
                  onChange={this.handleChange}
                  required
                ></textarea>
                <span className="required">*</span>
              </label>

              <input type="submit" name="submit" id="submit" value="ENVOYER" />

              <em>
                Les informations que vous nous communiquez resteront strictement
                confidentielles, et ne serviront qu'en interne pour faciliter la
                mise en relation, ainsi que la compréhension de votre projet.
              </em>
            </form>
          </div>

          <div className="Traditional-address">
            <p>
              La Fabrik-Charrier reste à votre disposition par des moyens plus
              traditionnels. Vous pouvez également vous rendre directement dans
              nos locaux.
            </p>

            <ul>
              <li>
                <strong>Addresse : </strong>
                <p>
                  Lieu-dit 5189,
                  <br />
                  Chaussée Brunehaut
                  <br />
                  62240 Longfossé
                </p>
              </li>
              <li>
                <strong>Téléphone :</strong>
                <p>
                  <a href="tel:+33677900823">06 77 90 08 23</a>
                </p>
              </li>
              <li>
                <strong>Mail :</strong>
                <p>
                  <a href="mailto:lafabrik.ebeniste@gmail.com">
                    lafabrik.ebeniste@gmail.com
                  </a>
                </p>
              </li>
            </ul>

            <div className="cleared"></div>
          </div>
        </div>
        <div id="map" className="Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.9302270309595!2d1.8396083159169545!3d50.65689838034839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ddcab053ac0afd%3A0xbb6cc86d32440cc1!2sVillage+des+M%C3%A9tiers+d&#39;Art+de+Desvres!5e1!3m2!1sfr!2sfr!4v1533126541735"
            title="Inline Frame Fabrik-Charrier Location"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Contact;
