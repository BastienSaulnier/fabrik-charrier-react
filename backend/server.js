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
      console.log("Error on GET /portfolio!");
      console.error(err);
      return res.status(500).send("Sorry, we encountered an internal error.");
    }
    return res.status(200).json(results);
  });
});

app.listen(serverPort, err => {
  if (err) throw err;
  console.log(`Server listening on http://localhost:${serverPort}`);
});
