const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
// const mongoose = require("mongoose");

const Review = require("../models/review");
// const User = require("../models/user");
// const Trailer = require("../models/trailer");

const createReview = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { author, title, rating, trailerName } = req.body;

  const createdReview = new Review({
    author,
    title,
    rating,
    trailerName,
  });

  try {
    await createdReview.save();
  } catch (err) {
    const error = new HttpError("Create review failed", 500);
    return next(error);
  }
  res.status(201).json({ review: createdReview });
};

const getReviewById = async (req, res, next) => {
  const reviewId = req.params.rid;

  let review;
  try {
    review = await Review.findById(reviewId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong , could not find review",
      500
    );
    return next(error);
  }

  if (!review) {
    const error = new HttpError(
      "Could not find a review for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ review: review.toObject({ getters: true }) });
};

const deleteReview = async (req, res, next) => {
  const reviewId = req.params.rid;

  let review;
  try {
    review = await Review.findById(reviewId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete review.",
      500
    );
    return next(error);
  }

  try {
    await review.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete review.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted review." });
};

exports.createReview = createReview;
exports.deleteReview = deleteReview;
exports.getReviewById = getReviewById;
