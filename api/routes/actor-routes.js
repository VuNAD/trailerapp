const express = require("express");

const { check } = require("express-validator");

const actorController = require("../controllers/actor-controllers");

const router = express.Router();

router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("information").not().isEmpty(),
    check("birthday").not().isEmpty(),
  ],
  actorController.createActor
);

router.patch(
  "/:aid",
  [
    check("name").not().isEmpty(),
    check("birthday").not().isEmpty(),
    check("information").not().isEmpty(),
  ],
  actorController.updateActor
);

router.post("/add-trailer",actorController.addTrailerToActor);

router.delete("/:aid", actorController.deleteActor);

router.get("/", actorController.getActors);
router.get("/:aid",actorController.getActorById);

// router.post("/login", userController.login);

module.exports = router;
