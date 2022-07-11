import React from "react";
import Slider from "../../slider/Slider";
import Carousel from "better-react-carousel";
import classes from "./todayList.module.css";

// const LIST_TRAILERS = [
//   {
//     id: "i1",
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
//     rating: 7.4,
//   },
//   {
//     id: "i2",
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
//     rating: 7,
//   },
//   {
//     id: "i3",
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
//     rating: 7.4,
//   },
//   {
//     id: "i4",
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
//     rating: 7.4,
//   },
//   {
//     id: "i5",
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
//     rating: 7.4,
//   },
//   {
//     id: "i6",
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
//     rating: 7.4,
//   },
//   {
//     id: "i7",
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
//     rating: 7.4,
//   },
//   {
//     id: "i8",
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
//     rating: 7.4,
//   },
//   {
//     id: "i9",
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
//     rating: 7.4,
//   },
//   {
//     id: "i10",
//     name: "Doctor Strange in the Multiverse of Madness",
//     img: "https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg",
//     rating: 7.4,
//   },
// ];

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


const TodayList = () => {
  return (
    <div className={classes.today}>
      <div className={classes.name}>Today list</div>
      <Carousel cols={6} rows={1} gap={8} loop dot={MyDot}>
        <Carousel.Item>
          <Slider />
        </Carousel.Item>
        <Carousel.Item>
          <Slider />
        </Carousel.Item>

        <Carousel.Item>
          <Slider />
        </Carousel.Item>

        <Carousel.Item>
          <Slider />
        </Carousel.Item>

        <Carousel.Item>
          <Slider />
        </Carousel.Item>

        <Carousel.Item>
          <Slider />
        </Carousel.Item>

        <Carousel.Item>
          <Slider />
        </Carousel.Item>

        <Carousel.Item>
          <Slider />
        </Carousel.Item>
        <Carousel.Item>
          <Slider />
        </Carousel.Item>
        <Carousel.Item>
          <Slider />
        </Carousel.Item>
        <Carousel.Item>
          <Slider />
        </Carousel.Item>
        <Carousel.Item>
          <Slider />
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default TodayList;
