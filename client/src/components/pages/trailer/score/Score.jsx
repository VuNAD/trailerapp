import React from "react";
import classes from "./score.module.css";
import RecentReviews from "./listReviews/RecentReviews";
import UserReviews from "./listReviews/UserReviews";
import { Link } from "react-router-dom";
const RECENT_REVIEWS = [
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
    // isExpert: true,
  },
  {
    id: "r2",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    // isExpert: true,
  },
  {
    id: "r3",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    // isExpert: true,
  },
  {
    id: "r4",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    // isExpert: true,
  },
  {
    id: "r5",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    // isExpert: true,
  },
  {
    id: "r6",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    // isExpert: true,
  },
  {
    id: "r7",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    // isExpert: true,
  },
  {
    id: "r8",
    name: "Vu Nguyen Anh",
    review:
      "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    // isExpert: true,
  },
];

// const averageRating =

const recentReviewList = USER_REVIEWS.map((review) => (
  <RecentReviews
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
        <div className={classes.title}>Recent reviews</div>
        {recentReviewList}
        <Link to={{ pathname: "/review" }} style={{ textDecoration: "none" }}>
          <div className={classes.more}>SEE MORE</div>
        </Link>
      </div>
      <div className={classes["user-score"]}>
        <div className={classes.title}>User reviews</div>
        {userReviewList}
        <Link to={{ pathname: "/review" }} style={{ textDecoration: "none" }}>
          <div className={classes.more}>SEE MORE</div>
        </Link>
      </div>
    </div>
  );
};

export default Score;
