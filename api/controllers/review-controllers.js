const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const mongoose = require("mongoose");

const Review = require("../models/review");
const User = require("../models/user");
const Trailer = require("../models/trailer");

const createReview = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { author, title, rating, trailerID } = req.body;

  const createdReview = new Review({
    author,
    title,
    rating,
    trailerID,
  });

  let user;

  try {
    user = await User.findById(author);
  } catch (err) {
    const error = new Error("Cannot review this trailer", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id", 404);
    return next(error);
  }

  console.log(user);

  let trailer;

  try {
    trailer = await Trailer.findById(trailerID);
  } catch (err) {
    const error = new Error("Cannot review with this trailerID", 500);
    return next(error);
  }

  if (!trailer) {
    const error = new HttpError("Could not find trailer for provided id", 404);
    return next(error);
  }

  console.log(trailer);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdReview.save({ session: sess });
    user.reviews.push(createdReview);
    trailer.reviews.push(createdReview);
    await user.save({ session: sess });
    await trailer.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Review this trailer failed, please try again.",
      500
    );
    return next(error);
  }

  // try {
  //   await createdReview.save();
  // } catch (err) {
  //   const error = new HttpError("Create review failed", 500);
  //   return next(error);
  // }
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

const getReviewsByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  // let places;
  let userWithReviews;
  try {
    userWithReviews = await User.findById(userId).populate("reviews");
  } catch (err) {
    const error = new HttpError(
      "Fetching reviews failed, please try again later",
      500
    );
    return next(error);
  }

  // if (!places || places.length === 0) {
  if (!userWithReviews || userWithReviews.reviews.length === 0) {
    return next(
      new HttpError("Could not find review(s) for the provided user id.", 404)
    );
  }

  res.json({
    reviews: userWithReviews.reviews.map((review) =>
      review.toObject({ getters: true })
    ),
  });
};

const deleteReview = async (req, res, next) => {
  const reviewId = req.params.rid;

  let review;
  try {
    review = await Review.findById(reviewId).populate(["author","trailerID"]);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete review.",
      500
    );
    return next(error);
  }

  if (!review) {
    const error = new HttpError("Could not find review for this id.", 404);
    return next(error);
  }

  try {
    // await review.remove();
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await review.remove({ session: sess });
    review.author.reviews.pull(review);
    review.trailerID.reviews.pull(review);
    await review.author.save({ session: sess });
    await review.trailerID.save({ session: sess });

    await sess.commitTransaction();
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
exports.getReviewsByUserId = getReviewsByUserId;
