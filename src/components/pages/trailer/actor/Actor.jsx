import React from "react";
import classes from "./actor.module.css";
const Actor = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.box}>
        <img src={props.img} alt="" />
        <div className={classes.name}>{props.name}</div>
      </div>
      <div className={classes.role}>{props.role}</div>
    </div>
  );
};

export default Actor;
