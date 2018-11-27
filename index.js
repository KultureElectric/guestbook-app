const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.mongooseConnect);

const app = express();

require("./routes/guestbookRoutes")(app);

app.listen(5000);
