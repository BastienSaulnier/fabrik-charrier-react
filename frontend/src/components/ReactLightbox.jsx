import React from "react";
import Lightbox from "react-lightbox-component";
import PortfolioPhotosList from "./PortfolioPhotosList.js";
import "../../node_modules/react-lightbox-component/build/css/index.css";

class ReactLightbox extends React.Component {
  render() {
    return (
      <div className="Lightbox">
        <Lightbox
          images={PortfolioPhotosList}
          thumbnailWidth="calc(25% - 10px)"
          thumbnailHeight="150px"
        />
      </div>
    );
  }
}

export default ReactLightbox;
