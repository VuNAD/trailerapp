const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  information: { type: String, required: true },
  birthday: { type: Date, required: true },
  movieID: [{ type: mongoose.Types.ObjectId, default: null, ref: "Trailer" }],
  avatar: { type: String, default: null },
  actorImages: [{ type: String, default: null }],
});

module.exports = mongoose.model("Actor", actorSchema);
