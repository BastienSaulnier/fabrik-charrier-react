import React from "react";
import ReactLightbox from "./ReactLightbox";
import { Link } from "react-router-dom";
import "./Portfolio.scss";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="Hero-portfolio overlay-2">
          <div className="center">
            <div className="Title">
              <p>
                <span>P</span>
                <span>O</span>
                <span>R</span>
                <span>T</span>
                <span>F</span>
                <span>O</span>
                <span>L</span>
                <span>I</span>
                <span>O</span>
              </p>

              <strong>
                <Link to="/">lafabrikcharrier.com</Link>
              </strong>
            </div>
          </div>
        </div>
        <div className="Portfolio">
          <ReactLightbox />
          {/*<div className="port-content">
            <a data-fancybox="gallery" href="img/portfolio/port-1.jpg">
              <img src="img/portfolio/port-1.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-2.jpg">
              <img src="img/portfolio/port-2.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-3.jpg">
              <img src="img/portfolio/port-3.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-4.jpg">
              <img src="img/portfolio/port-4.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-5.jpg">
              <img src="img/portfolio/port-5.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-6.jpg">
              <img src="img/portfolio/port-6.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-7.jpg">
              <img src="img/portfolio/port-7.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-8.jpg">
              <img src="img/portfolio/port-8.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-9.jpg">
              <img src="img/portfolio/port-9.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-10.jpg">
              <img src="img/portfolio/port-10.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-11.jpg">
              <img src="img/portfolio/port-11.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-12.jpg">
              <img src="img/portfolio/port-12.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-13.jpg">
              <img src="img/portfolio/port-13.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-14.jpg">
              <img src="img/portfolio/port-14.jpg" />
            </a>

            <a data-fancybox="gallery" href="img/portfolio/port-15.jpg">
              <img src="img/portfolio/port-15.jpg" />
            </a>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Portfolio;
