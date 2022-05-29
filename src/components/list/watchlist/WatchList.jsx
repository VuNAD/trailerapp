import React from "react";
import classes from "./watchList.module.css";
import Poster from "../../poster/Poster";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const WatchList = () => {
  return (
    <div className={classes.main}>
      <span className={classes.title}>Watch List</span>
      <div className={classes.wrapper}>
        <ArrowBackIosNewIcon className={classes['arrow-back']}/>
        <div className={classes.container}>
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
        </div>
        <ArrowForwardIosIcon className={classes['arrow-forward']}/>
      </div>
    </div>
  );
};

export default WatchList;
