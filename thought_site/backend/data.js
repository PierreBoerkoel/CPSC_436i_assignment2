// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our database's data structure 
const DataSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    thought: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
