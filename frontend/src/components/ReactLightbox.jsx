import React, { useState, useEffect } from "react";
import Lightbox from "react-lightbox-component";
import Spinner from "react-spinkit";
import axios from "axios";
import "./styles/ReactLightbox.scss";
import "../../node_modules/react-lightbox-component/build/css/index.css";

function ReactLightbox() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5050/portfolio")
      .then(res => {
        setPhotos(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setPhotos]);

  return (
    <div className="Lightbox">
      {loading && (
        <span className="loader">
          <Spinner name="cube-grid" />
          <p>... Loading ...</p>
        </span>
      )}

      {!loading && (
        <Lightbox
          images={photos}
          thumbnailWidth="calc(25% - 10px)"
          thumbnailHeight="150px"
        />
      )}
    </div>
  );
}

export default ReactLightbox;
