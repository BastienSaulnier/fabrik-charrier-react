import React from "react";
import SlickSlider from "../SlickSlider";
import { Link } from "react-router-dom";
import "./Products.scss";

class Products extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="Hero-produits overlay-2">
          <div className="center">
            <div className="Title">
              <p>
                <span>P</span>
                <span>R</span>
                <span>O</span>
                <span>D</span>
                <span>U</span>
                <span>I</span>
                <span>T</span>
                <span>S</span>
              </p>
              <strong>
                <Link to="/">lafabrikcharrier.com</Link>
              </strong>
            </div>
          </div>
        </div>
        <div className="Title-produits">
          <h4>à savoir :</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            molestiae aperiam possimus ut voluptatem provident ipsam quae neque
            alias reiciendis necessitatibus maxime rem corrupti cupiditate vel
            illum porro quis, in! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ad quisquam velit voluptatibus porro nemo expedita
            facilis veniam aliquid iste, voluptatum impedit sint dicta dolor
            iure officiis debitis aspernatur quia placeat.
          </p>
        </div>
        <SlickSlider />
      </div>
    );
  }
}

export default Products;
