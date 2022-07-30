const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/user");

const register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { username, email, password } = req.body;

  let existingEmail;
  try {
    existingEmail = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Register failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingEmail) {
    const error = new HttpError(
      "This email exists already, please try another instead.",
      422
    );
    return next(error);
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ username: username });
  } catch (err) {
    const error = new HttpError(
      "Register failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "This username exists already, please login instead.",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    username,
    email,
    password,
    review: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Register failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }

  res.json({ message: "Logged in!" });
};

// const userWatchList = async (req, res, next) => {
//   const {}
// }

exports.register = register;
exports.getUsers = getUsers;
exports.login = login;
