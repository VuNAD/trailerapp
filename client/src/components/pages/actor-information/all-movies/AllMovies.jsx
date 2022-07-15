import React from "react";
import Table from "./Table";
import classes from "./allMovies.module.css";
const AllMovies = () => {
  return (
    <div className={classes.allMovies}>
      <div className={classes.title}>Actor's Movies</div>
      <Table />
    </div>
  );
};

export default AllMovies;
