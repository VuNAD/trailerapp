const express = require("express");

const { check } = require("express-validator");

const userController = require("../controllers/user-controllers");

const router = express.Router();

router.post(
  "/register",
  [
    check("username").not().isEmpty(),
    check("email").normalizeEmail().isEmail(), //Check is Email or not
    check("password").not().isEmpty(),
  ],
  userController.register
);

router.get("/", userController.getUsers);

router.post("/login", userController.login);

module.exports = router;
