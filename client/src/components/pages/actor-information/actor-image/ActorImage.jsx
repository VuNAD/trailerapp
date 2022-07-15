import React from "react";
import classes from "./actorImage.module.css";
const ActorImage = () => {
  return (
    <div className={classes.box}>
      <img
        src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg"
        alt=""
        className={classes.image}
      />
    </div>
  );
};

export default ActorImage;
