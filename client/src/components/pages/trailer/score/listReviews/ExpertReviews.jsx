import React from "react";
import classes from "./expertReviews.module.css";
const ExpertReviews = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes["user-data"]}>
          <div className={classes["box-scores"]}>{props.score}</div>
          <div className={classes.name}>{props.name}</div>
        </div>
        <div className={classes["review-date"]}>
          <div className={classes.review}>{props.review}</div>
          <div className={classes.date}>{props.date}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpertReviews;
