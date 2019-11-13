import React from "react";
import Slider from "react-slick";
import ProductsList from "./ProductsList.js";
import "./SlickSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SlickSlider extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div className="Products-wrapper">
        <Slider {...settings}>
          {ProductsList.map(product => {
            return (
              <div className="Slider-product">
                <div className="Item">
                  <div className="Item-image">
                    <img src={product.photo} alt="" />
                  </div>
                  <div className="Item-body">
                    <div className="Item-title">
                      <h3>{product.product}</h3>
                    </div>
                    <div className="Item-desc">
                      <strong>Description :</strong>
                      <p>{product.description}</p>
                      <strong>
                        Catégorie :<p>{product.category}</p>
                      </strong>
                      <strong>
                        Base de prix :<p>{product.price} &euro;</p>
                      </strong>
                      <div className="Item-logo">
                        <img src="/img/logo.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="More">
                  <hr />
                  <strong>Note de l'atelier :</strong>
                  <p>{product.note}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <aside className="Cat-products">
          <h4>CATÉGORIES :</h4>
          <ul>
            <li>
              <a href="">Category 1</a>
            </li>
            <li>
              <a href="">Category 2</a>
            </li>
            <li>
              <a href="">Category 3</a>
            </li>
            <li>
              <a href="">Category 4</a>
            </li>
            <li>
              <a href="">Category 5</a>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default SlickSlider;
