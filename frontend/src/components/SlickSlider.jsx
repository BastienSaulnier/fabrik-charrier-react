import React from "react";
import Slider from "react-slick";
import ProductsList from "./ProductsList.js";
import "./styles/SlickSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "react-lightbox-component";

class SlickSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        swipeToSlide: true
      },
      ProductsList: ProductsList
    };
  }

  render() {
    return (
      <div className="Products-wrapper">
        <Slider {...this.state.settings}>
          {ProductsList.map(product => {
            return (
              <div
                id={"productNumber" + product.productId}
                className="Slider-product"
              >
                <div className="Item">
                  <div className="ProductsCount">
                    Produit : {product.productId} / {ProductsList.length}
                  </div>
                  <div className="Item-image">
                    <img src={product.photo} alt="" />
                  </div>

                  <Lightbox
                    images={product.lightboxGallery}
                    thumbnailWidth="40px"
                    thumbnailHeight="40px"
                  />

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
            {/*{ProductsList.map(product => {
              return (
                <li>
                  <a href="">{product.category}</a>
                </li>
              );
            })}*/}
            <button onClick={this.buffetList}>Buffets</button>
          </ul>
        </aside>
      </div>
    );
  }
}

export default SlickSlider;
