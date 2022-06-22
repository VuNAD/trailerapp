const express = require("express");

const { check } = require('express-validator');

const trailerController = require("../controllers/trailer-controllers");

const router = express.Router();

// router.get('/')
router.get("/:tid", trailerController.getTrailerById);

router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("description").not().isEmpty(),
    check("genre").not().isEmpty(),
    check("actor").not().isEmpty(),
    check("director").not().isEmpty()
  ],
  trailerController.createTrailer
);

router.patch(
  "/:tid",
  [
    check("name").not().isEmpty(),
    check("description").not().isEmpty(),
    check("genre").not().isEmpty(),
    check("actor").not().isEmpty(),
    check("director").not().isEmpty()
  ],
  trailerController.updateTrailer
);
router.delete("/:tid", trailerController.deleteTrailer);



module.exports = router;
