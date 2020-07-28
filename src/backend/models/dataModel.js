const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  Topic: {
    type: String,
    required: true,
  },
  Details: {
    type: String,
    required: true,
  },
});
const Data = mongoose.model("data", dataSchema);
module.exports = Data;
