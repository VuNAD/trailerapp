import React from "react";
import classes from "./featured.module.css";
import UpNext from "../up-next/UpNext";

const UP_NEXT_TRAILER = [
  {
    id: "un1",
    time: "2:11",
    link: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/deuuhxk-3afd5ad4-48d1-4e3b-9682-7979d0bb63a5.jpg/v1/fill/w_1280,h_1897,q_75,strp/joker_poster__matrix_4_version__by_mintmovi3_deuuhxk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5NyIsInBhdGgiOiJcL2ZcLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMFwvZGV1dWh4ay0zYWZkNWFkNC00OGQxLTRlM2ItOTY4Mi03OTc5ZDBiYjYzYTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.o_u9QgQRDifDOilk4vv2NqZ_qC2GM5dK6uGccI5RmB8",
    name: "Joker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sequi, reiciendis!",
  },
  {
    id: "un2",
    time: "2:59",
    link: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/deuuhxk-3afd5ad4-48d1-4e3b-9682-7979d0bb63a5.jpg/v1/fill/w_1280,h_1897,q_75,strp/joker_poster__matrix_4_version__by_mintmovi3_deuuhxk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5NyIsInBhdGgiOiJcL2ZcLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMFwvZGV1dWh4ay0zYWZkNWFkNC00OGQxLTRlM2ItOTY4Mi03OTc5ZDBiYjYzYTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.o_u9QgQRDifDOilk4vv2NqZ_qC2GM5dK6uGccI5RmB8",
    name: "Joker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sequi, reiciendis!",
  },
  {
    id: "un3",
    time: "2:11",
    link: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/deuuhxk-3afd5ad4-48d1-4e3b-9682-7979d0bb63a5.jpg/v1/fill/w_1280,h_1897,q_75,strp/joker_poster__matrix_4_version__by_mintmovi3_deuuhxk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5NyIsInBhdGgiOiJcL2ZcLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMFwvZGV1dWh4ay0zYWZkNWFkNC00OGQxLTRlM2ItOTY4Mi03OTc5ZDBiYjYzYTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.o_u9QgQRDifDOilk4vv2NqZ_qC2GM5dK6uGccI5RmB8",
    name: "Joker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sequi, reiciendis!",
  },
];

const upNextList = UP_NEXT_TRAILER.map((trailer) => (
  <UpNext
    key={trailer.id}
    link={trailer.link}
    name={trailer.name}
    description={trailer.description}
    time={trailer.time}
  />
));

const Featured = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <img
          className={classes.poster}
          src="https://cdnimg.vietnamplus.vn/t620/uploaded/bokttj/2022_05_09/doctor_strange.jpg"
          alt=""
        />
        <div className={classes["up-next"]}>
          <div className={classes.text}>Up Next </div>
          <div className={classes["list-trailer"]}>{upNextList}</div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
