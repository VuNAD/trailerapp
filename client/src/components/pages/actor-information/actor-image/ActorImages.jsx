import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import classes from "./actorImages.module.css";
import Carousel from "better-react-carousel";
import Poster from "../../../poster/Poster";
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
const LIST_TRAILERS = [
  {
    id: "i1",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  {
    id: "i2",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7,
  },
  {
    id: "i3",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  {
    id: "i4",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  {
    id: "i5",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  {
    id: "i6",
    name: "Doctor Strange in the Multiverse of Madness",
    img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
    rating: 7.4,
  },
  // {
  //   id: "i7",
  //   name: "Doctor Strange in the Multiverse of Madness",
  //   img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
  //   rating: 7.4,
  // },
  // {
  //   id: "i8",
  //   name: "Doctor Strange in the Multiverse of Madness",
  //   img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
  //   rating: 7.4,
  // },
  // {
  //   id: "i9",
  //   name: "Doctor Strange in the Multiverse of Madness",
  //   img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
  //   rating: 7.4,
  // },
  // {
  //   id: "i10",
  //   name: "Doctor Strange in the Multiverse of Madness",
  //   img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
  //   rating: 7.4,
  // },
];


const listImage =[]

for (const image of LIST_TRAILERS){
  listImage.push(<Carousel.Item 
  
  />)
}
const ActorImages = () => {

  return (
    <div className={classes.main}>
      <Carousel cols={6} rows={1} gap={7} loop >
        <Carousel.Item>
          <img src="https://picsum.photos/800/600?random=1" alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/800/600?random=2" alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/800/600?random=3" alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/800/600?random=4" alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/800/600?random=5" alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/800/600?random=6" alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/800/600?random=1" alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/800/600?random=1" alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/800/600?random=1" alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/800/600?random=1" alt="" />

        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ActorImages;
