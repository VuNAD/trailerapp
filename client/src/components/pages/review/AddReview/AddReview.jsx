import React from "react";
import classes from "./addReview.module.css";
import Rating from "../Rating/Rating";
const AddReview = () => {
  return (
    <div className={classes.addReview}>
      <div className={classes["review-box"]}>
        <Rating />
      </div>
    </div>
  );
};

export default AddReview;
