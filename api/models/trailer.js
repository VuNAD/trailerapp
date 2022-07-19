// const { urlencoded } = require("body-parser");
const mongoose = require("mongoose");

const trailerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  summary: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  actor: { type: String, required: true },
  director: { type: String, required: true },
  trailerURL: { type: String, required: true },
  trailerPoster: { type: String, required: true },
  reviews: [{ type: mongoose.Types.ObjectId, default: null, ref: "Review" }],
});

module.exports = mongoose.model("Trailer", trailerSchema);
