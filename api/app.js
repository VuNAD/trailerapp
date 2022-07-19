const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const trailerRoutes = require("./routes/trailer-routes");
const userRoutes = require("./routes/user-routes");
const actorRoutes= require("./routes/actor-routes");
const reviewRoutes= require("./routes/review-routes");
// const mongoWork = require("./mongoose");
const HttpError = require("./models/http-error");
const cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());

app.use("/api/trailer", trailerRoutes); // => /api/places...
app.use("/api/user", userRoutes); // => /api/user...
app.use("/api/actor", actorRoutes); // => /api/actor...
app.use("/api/review", reviewRoutes)//=> /api/review...
mongoose
  .connect(
    "mongodb+srv://declanvu:nav912k36795515@trailer_trailerapp.2vhgqsu.mongodb.net/trailerapp?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
