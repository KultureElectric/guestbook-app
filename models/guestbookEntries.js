const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  user: String,
  heading: String,
  body: String
});

mongoose.model("entries", EntrySchema);
