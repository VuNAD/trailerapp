import React from "react";
import classes from "./expertReview.module.css";
const ExpertReview = (props) => {
  return (
    <div className={classes.expertReview}>
      <div className={classes.score}>{props.score}</div>
      <div className={classes.container}>
        <div className={classes["author-date"]}>
          <div className={classes.author}>{props.author}</div>
          <div className={classes.date}>{props.date}</div>
        </div>
        <div className={classes.content}>
          <div className={classes.note}>{props.note}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpertReview;
