import React from "react";
import classes from "./score.module.css";
import ListReviews from "./listReviews/ListReviews";
const REVIEWS = [
  {
    id: "r1",
    name: "Vu",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r2",
    name: "Vu",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r3",
    name: "Vu",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r4",
    name: "Vu",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r5",
    name: "Vu",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r6",
    name: "Vu",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r7",
    name: "Vu",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r8",
    name: "Vu",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
];
//var expertScore = 0;

const reviewList = REVIEWS.map((review) => (
  <ListReviews
    key={review.id}
    name={review.name}
    review={review.review}
    score={review.score}
    date={review.date}
  />
));

const Score = () => {
  // for (const id in REVIEWS) {
  //   if (id.isExpert) {
  //     expertScore = expertScore + id.score;
  //   }
  // }
  //console.log(expertScore);
  return (
    <div className={classes.main}>
      <div className={classes["expert-score"]}>
        <div className={classes.title}>EXPERT SCORE</div>
        <div className={classes.reviews}>
          <div className={classes["box-scores"]}>100</div>
          <div className={classes["review-count"]}>
            <div className={classes.positive}>POSITIVE: 5 REVIEWS</div>
            <div className={classes.mixed}>MIXED: 5 REVIEWS</div>
            <div className={classes.negative}>NEGATIVE: 5 REVIEWS</div>
          </div>
        </div>
        <div className={classes["list-name"]}>Expert reviews</div>
        {reviewList}
      </div>

      <div className={classes["user-score"]}>
        <div className={classes.title}>USER SCORE</div>
        <div className={classes.reviews}>
          <div className={classes["box-scores"]}>10</div>
          <div className={classes["review-count"]}>
            <div className={classes.positive}>POSITIVE: 5 REVIEWS</div>
            <div className={classes.mixed}>MIXED: 5 REVIEWS</div>
            <div className={classes.negative}>NEGATIVE: 5 REVIEWS</div>
          </div>
        </div>
        <div className={classes["list-name"]}>User reviews</div>
        {reviewList}
      </div>
    </div>
  );
};

export default Score;
