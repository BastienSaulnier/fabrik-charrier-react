import React from "react";
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
                sur <a href="#">lafabrikcharrier.com</a>
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
