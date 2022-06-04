import React from "react";
import classes from "./poster.module.css";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Fragment } from "react";
const Poster = (props) => {
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.box}>
          <img src={props.img} alt="" />
          <div className={classes.content}>
            <div className={classes.scores}>
              <StarIcon className={classes.icon} />
              <span className={classes.number}>{props.rating}</span>
            </div>
            <div className={classes["trailer-name"]}>{props.name}</div>
            <button className={classes.add}>
              <AddIcon />
              Watch List
            </button>
            <button ton className={classes["view-trailer"]}>
              <PlayArrowIcon />
              <span>Trailer</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Poster;
