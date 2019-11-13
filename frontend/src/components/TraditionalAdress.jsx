import React from "react";

function TraditionalAdress() {
  return (
    <React.Fragment>
      <div className="Traditional-address">
        <p>
          La Fabrik-Charrier reste à votre disposition par des moyens plus
          traditionnels. Vous pouvez également vous rendre directement dans nos
          locaux.
        </p>

        <ul>
          <li>
            <strong>Addresse : </strong>
            <p>
              Lieu-dit 5189,
              <br />
              Chaussée Brunehaut
              <br />
              62240 Longfossé
            </p>
          </li>
          <li>
            <strong>Téléphone :</strong>
            <p>
              <a href="tel:+33677900823">06 77 90 08 23</a>
            </p>
          </li>
          <li>
            <strong>Mail :</strong>
            <p>
              <a href="mailto:lafabrik.ebeniste@gmail.com">
                lafabrik.ebeniste@gmail.com
              </a>
            </p>
          </li>
        </ul>

        <div className="cleared"></div>
      </div>
    </React.Fragment>
  );
}
export default TraditionalAdress;
