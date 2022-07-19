const mongoose = require("mongoose");

const reviewScheme = new mongoose.Schema(
  {
    author: { type: String, required: true },
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    trailerName: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Review", reviewScheme);
