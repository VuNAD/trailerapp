import React, { useState, useRef } from "react";
import classes from "./watchList.module.css";
import Poster from "../../poster/Poster";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const LIST_TRAILERS = [
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
  {
    id: "i7",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  {
    id: "i8",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
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

const WatchList = () => {
  const trailerList = LIST_TRAILERS.map((trailer, index) => (
    <Poster
      key={trailer.id}
      name={trailer.name}
      img={trailer.img}
      rating={trailer.rating}
    />
  ));

  return (
    <div className={classes.main}>
      <span className={classes.title}>Watch List</span>
      <div className={classes.wrapper}>
        <ArrowBackIosNewIcon className={classes["arrow-back"]} />
        <div className={classes.container}>
          <div className={classes.list}>{trailerList}</div>
        </div>
        <ArrowForwardIosIcon className={classes["arrow-forward"]} />
      </div>
    </div>
  );
};

export default WatchList;
