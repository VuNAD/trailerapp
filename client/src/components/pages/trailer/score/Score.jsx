import React from "react";
import classes from "./score.module.css";
import ExpertReviews from "./listReviews/ExpertReviews";
import UserReviews from "./listReviews/UserReviews";

const EXPERT_REVIEWS = [
  {
    id: "r1",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r2",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r3",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r4",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r5",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r6",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r7",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r8",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
];

const USER_REVIEWS = [
  {
    id: "r1",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 10,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r2",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r3",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r4",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r5",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r6",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r7",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r8",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
];

const expertReviewList = EXPERT_REVIEWS.map((review) => (
  <ExpertReviews
    key={review.id}
    name={review.name}
    review={review.review}
    score={review.score}
    date={review.date}
  />
));

const userReviewList = USER_REVIEWS.map((review) => (
  <UserReviews
    key={review.id}
    name={review.name}
    review={review.review}
    score={review.score}
    date={review.date}
  />
));

const Score = () => {
  return (
    <div className={classes.main}>
      <div className={classes["expert-score"]}>
        <div className={classes.title}>
          Expert reviews
          <span className={classes["see-all"]}>See All</span>
        </div>
        {expertReviewList}
      </div>
      <div className={classes["user-score"]}>
        <div className={classes.title}>
          User reviews
          <span className={classes["see-alls"]}>See All</span>
        </div>
        {userReviewList}
      </div>
    </div>
  );
};

export default Score;
