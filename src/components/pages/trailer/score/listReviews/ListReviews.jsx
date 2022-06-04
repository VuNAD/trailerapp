import React from "react";
import classes from "./listReviews.module.css";
const ListReviews = (props) => {
  return (
    <div className={classes.main}>
        <hr></hr>
      <div className={classes["user-data"]}>
        <div className={classes["box-scores"]}>{props.score}</div>
        <div className={classes["name-date"]}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.date}>{props.date}</div>
        </div>
      </div>
      <div className={classes.review}>{props.review}</div>
    </div>
  );
};

export default ListReviews;
