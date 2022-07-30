import React from "react";
import AddIcon from "@mui/icons-material/Add";
import classes from "./item.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Item = ({ index }) => {
  const [loadedTrailers, setLoadedTrailers] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/trailer/62e432b36fe4466698b9b5a2"
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedTrailers(responseData.trailer);
      } catch (err) {
        // setError(err.message);
      }
    };
    sendRequest();
  }, []);

  // console.log(loadedTrailers);
  return (
    <Link
      to={{ pathname: "/trailer" }}
      style ={{textDecoration: "none"}}
      // activeClassName={classes.active} to="/trailer"
    >
      <div className={classes.box}>
        <div className={classes.container}>
          <img
            // src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg"
            src={loadedTrailers.trailerPoster}
            alt=""
            className={classes.image}
          />
          <div className={classes.content}>
            <div className={classes.scores}>
              <StarIcon className={classes.icon} />
              <span className={classes.number}>{loadedTrailers.rating}</span>
              {/* <span className={classes.number}>7.4</span> */}
            </div>
            <div className={classes["trailer-name"]}>
              {/* Doctor Strange in the Multiverse of Madness */}
              {/* {console.log(loadedTrailers.name)} */}
              {loadedTrailers.name}
            </div>
            <button className={classes.add}>
              <AddIcon />
              Watch List
            </button>
            <button className={classes["view-trailer"]}>
              <PlayArrowIcon />
              <span>Trailer</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
