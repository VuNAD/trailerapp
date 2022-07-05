import React from "react";
import { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import classes from "./rating.module.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const reviewAdd = () => {
    console.log(rating);
  };

  return (
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
        placeholder={"Write your review here..."}></textarea>
        <div className={classes.wrapper}>
          <button className={classes.submit}onClick={reviewAdd}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rating;
