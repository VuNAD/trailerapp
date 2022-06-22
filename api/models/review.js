const mongoose = require("mongoose");

const reviewScheme = new mongoose.Schema(
  {
    author: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    // trailerName: { type: mongoose.Types.ObjectId, required: true, ref:"Trailer" },
    trailerName: { type: Number, required: true },
  }
  //   ,

  //   { timestamps: true }
);
module.exports = mongoose.model("Review", reviewScheme);
