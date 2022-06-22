import React from "react";
import classes from "./home.module.css";

import Featured from "../../featured/Featured";
import WatchList from "../../list/watchlist/WatchList";
const Home = () => {
  return (
    <div className={classes.main}>
      {/* <NavBar onShowSignIn={showSignInHandler} /> */}
      <Featured />
      <WatchList />
      <WatchList />
      <WatchList />
    </div>
  );
};

export default Home;
