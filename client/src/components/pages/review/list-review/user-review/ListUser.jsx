import React from "react";
import classes from "./listUser.module.css";
import UserReview from "./UserReview";

const USER_REVIEWS = [
  {
    id: "r1",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 10,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r2",
    author: "Vu Nguyen",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r3",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r4",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r5",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r6",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r7",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 5,
    date: "05/22/2022",
    isExpert: true,
  },
  {
    id: "r8",
    author: "Vu Nguyen Anh",
    note: "Some people will dismiss the film as nonsense, and they could have a point. But Doctor Strange in the Multiverse of Madness is a huge amount of fun.",
    score: 8,
    date: "05/22/2022",
    isExpert: true,
  },
];

const userReviewList = USER_REVIEWS.map((review) => (
  <UserReview
    key={review.id}
    score={review.score}
    author={review.author}
    date={review.date}
    note={review.note}
  />
));

const ListUser = () => {
  return (
    <div className={classes.listUser}>
      <div className={classes.title}>User Review</div>
      {userReviewList}
    </div>
  );
};

export default ListUser;
