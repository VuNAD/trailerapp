const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

const Actor = require("../models/actor");

const createActor = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, information, birthday, movie } = req.body;

  const createdActor = new Actor({ name, information, birthday, movie });

  try {
    createdActor.save();
  } catch (err) {
    const error = new HttpError("Create actor failed", 500);
    return next(error);
  }
  res.status(201).json({ actor: createdActor });
};

const updateActor = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }
  const actorId = req.params.aid;
  const { name, birthday, information, movie } = req.body;

  let actor;
  try {
    actor = await Actor.findById(actorId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update actor.",
      500
    );
    return next(error);
  }

  actor.name = name;
  actor.information = information;
  actor.birthday = birthday;
  actor.movie = movie;
  try {
    await actor.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update actor.",
      500
    );
    return next(error);
  }
  res.status(200).json({ actor: actor.toObject({ getters: true }) });
};

const deleteActor = async (req, res, next) => {
  const actorId = req.params.aid;

  let actor;
  try {
    actor = await Actor.findById(actorId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete actor.",
      500
    );
    return next(error);
  }

  try {
    await actor.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete actor.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted actor." });
};


const getActors = async (req, res, next) => {
  let actors;
  try {
    actors = await Actor.find();
  } catch (err) {
    const error = new HttpError(
      'Fetching actors failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({actors: actors.map(actor => actor.toObject({ getters: true }))});
};

exports.createActor = createActor;
exports.updateActor = updateActor;
exports.deleteActor = deleteActor;
exports.getActors = getActors; 