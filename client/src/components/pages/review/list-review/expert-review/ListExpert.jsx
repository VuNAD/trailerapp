import React from "react";
import ExpertReview from "./ExpertReview";
import classes from "./listExpert.module.css";
const EXPERT_REVIEWS = [
  {
    id: "r1",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 100,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r2",
    author: "Vu Nguyen",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r3",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r4",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r5",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r6",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 80,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r7",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 99,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r8",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 10,
    date: "05/22/2022",
    isExpert: true,
  },
];

const expertReviewList = EXPERT_REVIEWS.map((review) => (
  <ExpertReview
    key={review.id}
    score={review.score}
    author={review.author}
    date={review.date}
    note={review.note}
  />
));
const ListExpert = () => {
  return (
    <div className={classes.listExpert}>
      <div className={classes.title}>Expert Review</div>
      {expertReviewList}
    </div>
  );
};

export default ListExpert;
