import React from "react";
import classes from "./mySlide.module.css";
import { useRef, useState } from "react";
import Item from "./Item";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const MySlide = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 10;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 6);
      listRef.current.style.transform = `translateX(${944 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 12) {
      setSlideNumber(slideNumber + 6);
      listRef.current.style.transform = `translateX(${-1205 + distance}px)`;
    }
  };
  return (
    <div className={classes.mySlide}>
      <div className={classes["wrapper"]}>
        <ArrowBackIosIcon
          className={classes["sliderArrowLeft"]}
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className={classes["container"]} ref={listRef}>
          <Item index={0} />
          <Item index={1} />
          <Item index={2} />
          <Item index={3} />
          <Item index={4} />
          <Item index={5} />
          <Item index={6} />
          <Item index={7} />
          <Item index={8} />
          <Item index={9} />
          <Item index={10} />
          <Item index={11} />
          <Item index={12} />
          <Item index={13} />
          <Item index={14} />
          <Item index={15} />
        </div>
        <ArrowForwardIosIcon
          className={classes["sliderArrowRight"]}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default MySlide;
