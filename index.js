const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/guestbookEntries");

mongoose.connect(
  keys.mongoURI,
  err => {
    err ? console.log(err) : console.log("Connection ready");
  }
);

const app = express();

require("./routes/guestbookRoutes")(app);

app.listen(5000);
