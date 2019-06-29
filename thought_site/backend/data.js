const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    _id: Number,
    firstName: String,
    lastName: String,
    thought: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
