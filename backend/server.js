const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { serverPort, db } = require("./conf.js");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/portfolio", (req, res) => {
  db.query(`SELECT * FROM portfolio`, (err, results) => {
    if (err) {
      console.log("Error on GET /portfolio !");
      console.error(err);
      return res.status(500).send("Sorry, we encountered an internal error.");
    }
    return res.status(200).json(results);
  });
});

app.get("/products", (req, res) => {
  db.query(
    `SELECT 
      products.id, 
      products.photo,
      products.name,
      products.pr_description,
      products.price,
      products.category,
      products.workshop_advice,
      lightbox_product.src,
      lightbox_product.title,
      lightbox_product.lb_description
      FROM products LEFT JOIN lightbox_product ON products.lightbox_id = lightbox_product.id`,
    (err, results) => {
      if (err) {
        console.log("Error on GET /products !");
        console.error(err);
        return res.status(500).send("Sorry, we encountered an internal error.");
      }
      return res.status(200).json(results);
    }
  );
});

app.listen(serverPort, err => {
  if (err) throw err;
  console.log(`Server listening on http://localhost:${serverPort}`);
});
