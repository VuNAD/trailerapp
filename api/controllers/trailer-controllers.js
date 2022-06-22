const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Trailer = require("../models/trailer");

const getTrailerById = async (req, res, next) => {
  const trailerId = req.params.tid;

  let trailer;
  try {
    trailer = await Trailer.findById(trailerId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong , could not find trailer",
      500
    );
    return next(error);
  }

  if (!trailer) {
    const error = new HttpError(
      "Could not find a trailer for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ trailer: trailer.toObject({ getters: true }) });
};

const createTrailer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, description, genre, actor, director, trailerURL } = req.body;

  const createdTrailer = new Trailer({
    name,
    description,
    genre,
    actor,
    director,
    trailerURL,
  });

  try {
    createdTrailer.save();
  } catch (err) {
    const error = new HttpError("Create trailer failed", 500);
    return next(error);
  }
  res.status(201).json({ trailer: createdTrailer });
};

const updateTrailer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const { name, description, genre, actor, director, trailerURL } = req.body;
  const trailerId = req.params.tid;

  let trailer;
  try {
    trailer = await Trailer.findById(trailerId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update trailer.",
      500
    );
    return next(error);
  }

  trailer.name = name;
  trailer.description = description;
  trailer.genre = genre;
  trailer.actor = actor;
  trailer.director = director;
  trailer.trailerURL = trailerURL;

  try {
    await trailer.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update trailer.",
      500
    );
    return next(error);
  }
  res.status(200).json({ trailer: trailer.toObject({ getters: true }) });
};

const deleteTrailer = async (req, res, next) => {
  const trailerId = req.params.tid;

  let trailer;
  try {
    trailer = await Trailer.findById(trailerId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete trailer.",
      500
    );
    return next(error);
  }

  try {
    await trailer.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete place.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted place." });
};

exports.createTrailer = createTrailer;
exports.getTrailerById = getTrailerById;
exports.updateTrailer = updateTrailer;
exports.deleteTrailer = deleteTrailer;