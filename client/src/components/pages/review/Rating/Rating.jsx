import React from "react";
import { useState, useRef } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import classes from "./rating.module.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const reviewRef = useRef("");

  function submitReview(event) {
    event.preventDefault();

    const review = {
      rating: rating,
      reviewText: reviewRef.current.value,
    };
    console.log(review);
  }

  return (
    <form onSubmit={submitReview}>
      <div className={classes.main}>
        <div className={classes.content}>
          <div className={classes.rate}>
            Write your review here
            <div className={classes["star-rating"]}>
              {[...Array(10)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    id="rated"
                    className={
                      classes[`${index <= (hover || rating) ? "on" : "off"}`]
                    }
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <StarRateIcon className={classes.star} />
                  </button>
                );
              })}
            </div>
          </div>
          <textarea
            className={classes.review}
            placeholder={"Write your review here..."}
            rows="5"
            id="review-text"
            ref={reviewRef}
          ></textarea>
          <div className={classes.wrapper}>
            <button className={classes.submit}>Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Rating;
