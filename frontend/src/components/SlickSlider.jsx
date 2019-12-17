import React, { useState, useEffect } from "react";
import Slider from "react-slick";
//import Lightbox from "react-lightbox-component";
import Spinner from "react-spinkit";
import axios from "axios";
import "./styles/SlickSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function SlickSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/products`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setProducts]);

  console.log(setProducts);

  return (
    <div className="Products-wrapper">
      {loading && (
        <span className="loader">
          <Spinner name="cube-grid" />
          <p>... Loading ...</p>
        </span>
      )}

      {!loading && (
        <Slider {...settings}>
          {products.map(product => {
            return (
              <div id={"productNumber" + product.id} className="Slider-product">
                <div className="Item">
                  <div className="ProductsCount">
                    Nb produits : {products.length}
                  </div>
                  <div className="Item-image">
                    <img src={product.photo} alt="" />
                  </div>

                  {/*<Lightbox
                    images={product.lightboxGallery}
                    thumbnailWidth="40px"
                    thumbnailHeight="40px"
                  />*/}

                  <div className="Item-body">
                    <div className="Item-title">
                      <h3>{product.name}</h3>
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
                  <p>{product.workshop_advice}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
      <aside className="Cat-products">
        <h4>CATÉGORIES :</h4>
        <ul>
          <li>
            <Link to="all">Tout les produits</Link>
          </li>
          {products.map(product => {
            return (
              <li>
                <Link to={`${product.category.toLowerCase()}`}>
                  {product.category}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

export default SlickSlider;
