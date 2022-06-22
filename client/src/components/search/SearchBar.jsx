import React from "react";
import classes from "./search.module.css";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <div className={classes.search}>
      <input
        className={classes.searchBar}
        type="search"
        placeholder="Search trailers..."
      />
      {/* <button className={classes.searchbtn}>Search</button> */}
    </div>
  );
};

export default SearchBar;
