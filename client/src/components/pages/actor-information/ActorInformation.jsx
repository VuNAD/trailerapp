import React from "react";
import classes from "./actorInformation.module.css";
import { useState, useEffect } from "react";
import HighestRated from "./highest-rated/HighestRated";
import AllMovies from "./all-movies/AllMovies";

import ListActorImages from "./actor-image/ListActorImages";
const HIGHEST_RATED_MOVIES = [
  {
    id: "i1",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  {
    id: "i2",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7,
  },
  {
    id: "i3",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  {
    id: "i4",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  {
    id: "i5",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  {
    id: "i6",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  // {
  //   id: "i7",
  //   name: "Doctor Strange in the Multiverse of Madness",
  //   img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
  //   rating: 7.4,
  // },
  // {
  //   id: "i8",
  //   name: "Doctor Strange in the Multiverse of Madness",
  //   img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
  //   rating: 7.4,
  // },
  // {
  //   id: "i9",
  //   name: "Doctor Strange in the Multiverse of Madness",
  //   img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
  //   rating: 7.4,
  // },
  // {
  //   id: "i10",
  //   name: "Doctor Strange in the Multiverse of Madness",
  //   img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
  //   rating: 7.4,
  // },
];

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={classes.text}>
      {isReadMore ? text.slice(0, 850) : text}
      <span onClick={toggleReadMore} className={classes["read-or-hide"]}>
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};

const ActorInformation = () => {
  const [actorData, setActorData] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/actor/62e5fd30c326431bb009a81b"
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setActorData(responseData.actor);
      } catch (err) {
        // setError(err.message);
      }
    };
    sendRequest();
  }, []);
  // console.log(actorData);
  const highestRatedList = HIGHEST_RATED_MOVIES.map((movie, index) => (
    <HighestRated
      key={movie.id}
      name={movie.name}
      img={movie.img}
      rating={movie.rating}
    />
  ));
  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <img
          // src="https://static2.yan.vn/YanNews/2167221/202204/atti4-1-b61e00c3.jpg"
          src={actorData.avatar}
          alt=""
          className={classes.avatar}
        />
        <div className={classes["actor-information"]}>
          <div className={classes["actor-name"]}>{actorData.name}</div>
          <div className={classes["actor-birthday"]}>{actorData.birthday}</div>
          <div className={classes["actor-story"]}>
            <ReadMore>{actorData.information}</ReadMore>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.title}>Highest scores movies</div>
        <div className={classes["highest-scored"]}>{highestRatedList}</div>
      </div>
      <ListActorImages />
      <AllMovies />
    </div>
  );
};

export default ActorInformation;
