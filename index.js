const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/guestbookEntries");

mongoose.connect(
  keys.mongoURI,
  err => {
    err ? console.log(err) : console.log("Connection ready");
  }
);

const app = express();

app.use(bodyParser.json());

require("./routes/guestbookRoutes")(app);

app.listen(5000);
