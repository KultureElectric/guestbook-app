const mongoose = require("mongoose");

const Entry = mongoose.model("entries");

module.exports = app => {
  app.get("/api", async (req, res) => {
    const entries = await Entry.find({});

    res.send(entries);
  });

  app.post("/api", async (req, res) => {
    const { user, heading, body } = req.body;

    const newEntry = await new Entry({ user, heading, body }).save();

    const entries = await Entry.find({});
    res.send(entries);
  });
};
