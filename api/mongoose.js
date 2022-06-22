const mongoose = require("mongoose");

const Trailer = require("./models/trailer");


const createTrailer = async (req, res, next) => {
  const createdTrailer = new Trailer({
    name: req.body.name,
    description: req.body.description,
  });
  const result = await createdTrailer.save();
  res.json(result);
};

const getTrailer = async (req, res, next) => {
  const trailer = await Trailer.find().exec();
  res.json(trailer);
};

exports.createTrailer = createTrailer;
exports.getTrailer = getTrailer;
