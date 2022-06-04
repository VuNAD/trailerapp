import React from "react";
import classes from "./highestRated.module.css";
import StarIcon from "@mui/icons-material/Star";

const HighestRated = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.box}>
        <img src={props.img} alt="" />
        <div className={classes.content}>
          <div className={classes.scores}>
            <StarIcon className={classes.icon} />
            <div className={classes.number}>{props.rating}</div>
          </div>
          <div className={classes["trailer-name"]}>{props.name}</div>
        </div>
      </div>
    </div>
  );
};

export default HighestRated;
