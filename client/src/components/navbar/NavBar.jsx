import classes from "./navBar.module.css";
import ListIcon from "@mui/icons-material/List";
import React, { useContext } from 'react';
import { AuthContext } from "./../context/authContext/AuthContext";
import SearchBar from "../search/SearchBar";

const NavBar = () => {
  const auth = useContext(AuthContext);

  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.left}>
          <img
            src="https://e7.pngegg.com/pngimages/777/224/png-clipart-blue-and-pink-logo-european-fashion-home-logo-purple-blue.png"
            alt=""
            className={classes.logo}
          />
          <ListIcon className={classes.list} />
          <button className={classes.home}>HOME</button>
        </div>

        <SearchBar className={classes.search}/>
        <div className={classes.right}>
          <button className={classes["watch-list"]}>Watch List</button>
          {/* <button className={classes.register}>Register</button> */}
          { !auth.isLoggedIn && (<button className={classes["sign-in"]}>Log in</button>)}
          { auth.isLoggedIn && (<button className={classes["sign-out"]}>Log out</button>)}

        </div>
      </div>
    </div>
  );
};

export default NavBar;
