import React from "react";
import classes from "./poster.module.css";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const Poster = () => {
  return (
    <div className={classes.main}>
      <div className={classes.box}>
        <img
          src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg"
          alt=""
        />

        <div className={classes.content}>
          <div className={classes.scores}>
            <StarIcon className={classes.icon} />{" "}
            <span className={classes.number}>7.4</span>
          </div>
          <div className={classes["trailer-name"]}>
            Doctor Strange In The Multiverse Of Madness
          </div>
          <button className={classes.add}>
            <AddIcon />
            Watch List
          </button>
          <button className={classes["view-trailer"]}>
            <PlayArrowIcon />
            <span>Trailer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
