import React from "react";

class ContactForm extends React.Component {
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
    );
  }
}
export default ContactForm;
