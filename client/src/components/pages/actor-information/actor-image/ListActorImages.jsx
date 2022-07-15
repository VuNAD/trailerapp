import React from "react";
import classes from "./listActorImages.module.css";
import Carousel from "better-react-carousel";
import ActorImage from "./ActorImage";
const MyDot = ({ isActive }) => (
  <span
    style={{
      display: "inline-block",
      height: isActive ? "8px" : "5px",
      width: isActive ? "8px" : "5px",
      background: "#1890ff",
    }}
  ></span>
);
const ListActorImages = () => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>Actor Images</div>
      <Carousel cols={6} rows={1} gap={8} loop dot={MyDot}>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
        <Carousel.Item>
          <ActorImage />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ListActorImages;
