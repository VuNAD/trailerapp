import classes from "./navBar.module.css";
import ListIcon from "@mui/icons-material/List";
import SearchBar from "../search/SearchBar";
import React, { useState } from "react";

const NavBar = (props) => {

  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
        <div className={classes.logo}>LOGO</div>
        <ListIcon className={classes.list} />
        <button className={classes.home}>HOME</button>
      </div>
      <SearchBar className={classes["search-bar"]} />
      <div className={classes.right}>
        <button className={classes["watch-list"]}>Watch List</button>
        <button className={classes["sign-up"]}>Register</button>
        <button className={classes["sign-in"]} >Log in</button>
      </div>
    </div>
  );
};

export default NavBar;
