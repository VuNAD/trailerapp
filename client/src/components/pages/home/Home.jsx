import React from "react";
import classes from "./home.module.css";
import Featured from "./featured/Featured";
import TodayList from "../../list/todaylist/TodayList";
import MySlide from "./../../use-ref/MySlide";
const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <Featured />
        {/* <TodayList />
        <TodayList />
        <TodayList /> */}
        <MySlide />
        <MySlide />
        <MySlide />
      </div>
    </div>
  );
};

export default Home;
