// const { urlencoded } = require("body-parser");
const mongoose = require("mongoose");

const trailerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  summary: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  actors: [{ type: mongoose.Types.ObjectId, default: null, ref: "Actor" }],
  director: { type: String, required: true },
  trailerURL: { type: String, required: true },
  trailerPoster: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Types.ObjectId, default: null, ref: "Review" }],
});

module.exports = mongoose.model("Trailer", trailerSchema);
