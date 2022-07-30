const express = require("express");

const { check } = require("express-validator");

const reviewController = require("../controllers/review-controllers");

const router = express.Router();

router.post(
  "/",
  [
    // check("author").not().isEmpty(),
    check("title").not().isEmpty(),
    check("rating").not().isEmpty(),
    // check("trailerID").not().isEmpty(),
  ],
  reviewController.createReview
);
router.delete("/:rid", reviewController.deleteReview);

router.get("/:rid", reviewController.getReviewById);

router.get("/user/:uid", reviewController.getReviewsByUserId);

module.exports = router;
