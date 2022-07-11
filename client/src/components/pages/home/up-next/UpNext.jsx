import React from "react";
import classes from "./upNext.module.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
const UpNext = (props) => {
  return (
    <div className={classes.trailer}>
      <div className={classes.wrapper}>
        <img className={classes.link} src={props.link} alt="" />
        <div className={classes.content}>
          <div className={classes["play-time"]}>
          <PlayCircleIcon className={classes.play}/>
          <div className={classes.time}>{props.time}</div>
          </div>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.description}>{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default UpNext;
