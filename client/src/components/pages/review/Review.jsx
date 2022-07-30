import React from "react";
import classes from "./review.module.css";
// import AddReview from "./AddReview/AddReview";
import ListUser from "./list-review/user-review/ListUser";
import Comments from "./../../comments/Comments";
import ListExpert from "./list-review/expert-review/ListExpert";
const Review = () => {
  return (
    <div className={classes.review}>
      <div className={classes.container}>
        <div className={classes.name}>Joker</div>
        <div className={classes.date}>Release date: April 22, 2022</div>
        <div className={classes.all}>
          <div className={classes["all-scores"]}>
            {/* <div className={classes.expert}>
              <div className={classes.score}>
                <div className={classes.expertScore}>100</div>
              </div>
              <div className={classes.title}>Expert Score</div>
            </div> */}
            <div className={classes.user}>
              <div className={classes.score}>
                <div className={classes.userScore}>100</div>
              </div>
              <div className={classes.title}>User Score</div>
            </div>
          </div>
          <div className={classes.contribution}>
            <div className={classes.rating}>User rating contribution</div>
            <div className={classes.positive}>POSITIVE: 5 REVIEWS</div>
            <div className={classes.mixed}>MIXED: 5 REVIEWS</div>
            <div className={classes.negative}>NEGATIVE: 5 REVIEWS</div>
          </div>
        </div>
      </div>
      {/* <AddReview/> */}

      <Comments currentUserId="1" />
      <ListUser />
      <ListExpert />
    </div>
  );
};

export default Review;
