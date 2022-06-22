const router = require("express").Router();
const User = require("../models/user");

router.post("/register", (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  });
});
