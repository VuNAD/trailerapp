import React from "react";
import classes from "./trailer.module.css";
import TrailerDetails from "./details/TrailerDetails";
import Score from "./score/Score";
import Image from "./../trailer/score/image/Image"
const Trailer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <img
          src="https://o.rada.vn/data/image/2022/05/05/doctor-strange-ii-7.jpg"
          alt=""
          className={classes.trailer}
        />

        <div className={classes.scores}>
          <div className={classes.wrapper}>
            <div className={classes.note}>
              <div className={classes.name}>Doctor Strange</div>
              <div className={classes.year}>2022</div>
            </div>
            <hr></hr>

            <div className={classes["single-scores"]}>
              <div className={classes.all}>
                <div className={classes.user}>EXPERT SCORE</div>
                <div className={classes.note}>
                  Generally favorable reviews based on 25 Critic Reviews
                </div>
              </div>
              <div className={classes["box-scores"]}>100</div>
            </div>
          </div>
          <hr></hr>

          <div className={classes.wrapper2}>
            <div className={classes["single-scores"]}>
              <div className={classes.all}>
                <div className={classes.user}>USER SCORE</div>
                <div className={classes.note}>
                  Generally favorable reviews based on 25 Critic Reviews
                </div>
              </div>
              <div className={classes["box-scores"]}>10</div>
            </div>
          </div>
        </div>
      </div>
      <TrailerDetails />
      <Image/>
      <Score />
    </div>
  );
};

export default Trailer;
