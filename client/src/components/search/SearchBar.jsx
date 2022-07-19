import React from "react";
import classes from "./searchBar.module.css";
import TableData from "./../../TableData.json";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const myClick = () =>{
    console.log("Hello");
  }
  return (
    <div className={classes.search}>
      <input
        placeholder="Enter keywords..."
        className={classes.searchBar}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className={classes.result}>
        {
          // !isSearched && (
          TableData.filter((movie) => {
            if (query.trim() === "") {
              return null;
            } else if (
              movie.title.toLowerCase().includes(query.trim().toLowerCase())
            ) {
              return movie;
            }
          }).map((movie, index) => (
            <div className={classes.box} key={index}
            onClick={myClick}>
              <p>{movie.title}</p>
              <p>{movie.year}</p>
            </div>
          ))
          // )
        }
      </div>
    </div>
  );
};

export default SearchBar;
