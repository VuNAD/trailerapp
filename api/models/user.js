const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true, minlength: 6 },
    avatarUrl: { type: String, default: null },
    isExpert: { type: Boolean, default: false },
    reviews: [{ type: mongoose.Types.ObjectId, default: null, ref: "Review" }],
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
