import React, { useState, useEffect } from "react";
import Lightbox from "react-lightbox-component";
import axios from "axios";
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
      {loading && <p className="loader">... Loading ...</p>}
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
