const express = require("express");

const app = express();

require("./routes/guestbookRoutes")(app);

app.listen(5000);
