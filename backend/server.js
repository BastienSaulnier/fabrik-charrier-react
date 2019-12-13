const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { serverPort, db } = require("./conf.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.listen(serverPort, err => {
  if (err) throw err;
  console.log(`Server listening on http://localhost:${serverPort}`);
});
