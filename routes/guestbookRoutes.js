const mongoose = require("mongoose");

const Entry = mongoose.model("entries");

module.exports = app => {
  app.get("/", async (req, res) => {
    const entries = await Entry.find({});

    res.send(entries);
  });

  app.post("/", async (req, res) => {
    console.log(req.body);

    res.send("done");
  });
};
