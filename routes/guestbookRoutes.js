const mongoose = require("mongoose");

const Entry = mongoose.model("entries");

module.exports = app => {
  app.get("/", async (req, res) => {
    const testEntry = new Entry({
      user: "ruben",
      heading: "test",
      body: "asdfasdf"
    });

    await testEntry.save();

    res.send("Entry sent");
  });
};
