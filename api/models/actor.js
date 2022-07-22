const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  information: { type: String, required: true },
  birthday: { type: String, required: true },
  movie: { type: String, required: true },
  avatar: { type: String, required: true },
  actorImages: [{ type: String, default: null }],
});

module.exports = mongoose.model("Actor", actorSchema);
