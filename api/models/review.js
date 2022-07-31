const mongoose = require("mongoose");

const reviewScheme = new mongoose.Schema(
  {
    // author: { type: String, required: true },
    userID: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    title: { type: String, required: true },
    parentId: { type: mongoose.Types.ObjectId, default: null, ref: "Review" },
    rating: { type: Number },
    trailerID: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Trailer",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Review", reviewScheme);
