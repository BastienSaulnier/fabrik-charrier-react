import React from "react";
import Selector from "./Selector";
import { Link } from "react-router-dom";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="Hero overlay">
          <div className="center">
            <div className="Title">
              <p>
                <span>B</span>
                <span>I</span>
                <span>E</span>
                <span>N</span>
                <span>V</span>
                <span>E</span>
                <span>N</span>
                <span>U</span>
                <span>E</span>
              </p>
              <strong>
                sur <Link to="/">lafabrikcharrier.com</Link>
              </strong>
            </div>
          </div>
        </div>
        <section className="Intro">
          <h2>
            <strong>lafabrikcharrier.com</strong> vous souhaite la bienvenue !
          </h2>
          <ul>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore ea, magni, excepturi voluptates dolorem et dolor
                doloribus incidunt molestiae vero tenetur expedita consequatur.
                Inventore minus ad, nulla natus quasi maxime? Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Vero aperiam vitae
                corporis possimus minus eos debitis qui quod nisi, impedit
                veniam rem eligendi in dolore recusandae at nesciunt
                repellendus? Velit. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Id magni inventore dolor expedita vero ullam
                repudiandae, et eligendi, excepturi, totam doloremque deserunt
                eaque debitis minus rem optio laboriosam provident odio?
              </p>
            </li>

            <li>
              <img src="img/logo.png" alt="" />
            </li>
          </ul>
        </section>

        <section className="About">
          <h4>Un peu d'histoire :</h4>
          <hr />
          <ul>
            <li></li>

            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore ea, magni, excepturi voluptates dolorem et dolor
                doloribus incidunt molestiae vero tenetur expedita consequatur.
                Inventore minus ad, nulla natus quasi maxime? Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Vero aperiam vitae
                corporis possimus minus eos debitis qui quod nisi, impedit
                veniam rem eligendi in dolore recusandae at nesciunt
                repellendus? Velit. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Id magni inventore dolor expedita vero ullam
                repudiandae, et eligendi, excepturi, totam doloremque deserunt
                eaque debitis minus rem optio laboriosam provident odio?
              </p>
            </li>
          </ul>
        </section>

        <Selector />

        <section className="Work">
          <h4>à propos de nos travaux :</h4>
          <hr />
          <ul>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore ea, magni, excepturi voluptates dolorem et dolor
                doloribus incidunt molestiae vero tenetur expedita consequatur.
                Inventore minus ad, nulla natus quasi maxime? Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Vero aperiam vitae
                corporis possimus minus eos debitis qui quod nisi, impedit
                veniam rem eligendi in dolore recusandae at nesciunt
                repellendus? Velit. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Id magni inventore dolor expedita vero ullam
                repudiandae, et eligendi, excepturi, totam doloremque deserunt
                eaque debitis minus rem optio laboriosam provident odio?
              </p>
            </li>

            <li></li>
          </ul>
        </section>
        <section className="More">
          <h4>Dites nous en plus :</h4>
          <hr />
          <ul>
            <li></li>

            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore ea, magni, excepturi voluptates dolorem et dolor
                doloribus incidunt molestiae vero tenetur expedita consequatur.
                Inventore minus ad, nulla natus quasi maxime? Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Vero aperiam vitae
                corporis possimus minus eos debitis qui quod nisi, impedit
                veniam rem eligendi in dolore recusandae at nesciunt
                repellendus? Velit. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Id magni inventore dolor expedita vero ullam
                repudiandae, et eligendi, excepturi, totam doloremque deserunt
                eaque debitis minus rem optio laboriosam provident odio?
              </p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
export default Home;
