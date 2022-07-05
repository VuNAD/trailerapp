import React, { Fragment } from "react";
import classes from "./trailer.module.css";
import TrailerDetails from "./details/TrailerDetails";
import Score from "./score/Score";
const Trailer = () => {
  return (
    <Fragment>
      <div className={classes.main}>
        <img
          src="https://o.rada.vn/data/image/2022/05/05/doctor-strange-ii-7.jpg"
          alt=""
          className={classes.trailer}
        />

        <div className={classes.scores}>
          <div className={classes.wrapper}>
            <div className={classes.content}>
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
      <Score />
    </Fragment>
  );
};

export default Trailer;
