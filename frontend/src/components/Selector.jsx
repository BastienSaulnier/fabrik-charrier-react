import React from "react";
import "./Selector.scss";
import { Link } from "react-router-dom";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background_url: ""
    };
  }

  mouseEnter = event => {
    const id = event.target.id;
    switch (id) {
      case "hover-news":
        this.setState({
          background_url: "/img/news.jpg"
        });
        break;
      case "hover-produits":
        this.setState({
          background_url: "/img/produits.jpg"
        });
        break;
      case "hover-portfolio":
        this.setState({
          background_url: "/img/portfolio.jpg"
        });
        break;
      default:
        return;
    }
  };

  mouseLeave = event => {
    this.setState({
      background_url: ""
    });
  };

  render() {
    return (
      <div className="Selector">
        <div
          className="Bg-Selector"
          style={{ backgroundImage: `url(${this.state.background_url})` }}
        >
          <ol>
            <li>
              <div id="triangle-code"></div>
            </li>
            <li>
              <div id="triangle-code-2"></div>
            </li>
            <li>
              <div id="triangle-code-3"></div>
            </li>
          </ol>

          <ul>
            <li
              id="hover-news"
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
            >
              <article>
                <h3>News</h3>

                <p>
                  Suivez l'actualité de <strong>lafabrikcharrier.com</strong> et
                  obtnenez ainsi les dernières informations relatives à nos
                  travaux et compétences !
                </p>
                <i className="far fa-newspaper"></i>
                <Link to="/news">Accéder</Link>
              </article>
            </li>

            <li
              id="hover-produits"
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
            >
              <article>
                <h3>Produits</h3>

                <p>
                  Consultez dès à présent notre{" "}
                  <strong>Catalogue Produit</strong>, nous y présentons les
                  articles disponibles dans les meilleurs délais !
                </p>
                <i className="fas fa-couch"></i>
                <Link to="/products">Consulter</Link>
              </article>
            </li>

            <li
              id="hover-portfolio"
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
            >
              <article>
                <h3>Portfolio</h3>

                <p>
                  Pénétrez dans notre univers et découvrez en plus sur nos
                  travaux en consultant le <strong>Portfolio</strong> de la
                  Fabrik-Charrier !
                </p>
                <i className="fas fa-camera-retro"></i>
                <Link to="/portfolio">Voir Plus</Link>
              </article>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Selector;
