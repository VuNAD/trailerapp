import React from "react";
import classes from "./actorInformation.module.css";
import { Fragment } from "react";
import NavBar from "./../../navbar/NavBar";
import HighestRated from "./highest-rated/HighestRated";
const HIGHEST_RATED_MOVIES = [
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
const ActorInformation = () => {
  const highestRatedList = HIGHEST_RATED_MOVIES.map((movie, index) => (
    <HighestRated
      key={movie.id}
      name={movie.name}
      img={movie.img}
      rating={movie.rating}
    />
  ));
  return (
    <Fragment>
      <NavBar />
      <div className={classes.main}>
        <div className={classes.wrapper}>
          <img
            src="https://static2.yan.vn/YanNews/2167221/202204/atti4-1-b61e00c3.jpg"
            alt=""
            className={classes.avatar}
          />
          <div className={classes["actor-information"]}>
            <div className={classes["actor-name"]}>Benedict Cumberbatch</div>
            <div className={classes["actor-birthday"]}>
              Birthday: Jul 19, 1976
            </div>
            <div className={classes["actor-story"]}>
              One of the most well-respected British thespians of his
              generation, Benedict Cumberbatch may have taken the classic route
              to acting fame: spouting off Shakespeare at drama school, followed
              by BBC roles and eventually films, but his type of fame is
              decidedly 21st century. Cumberbatch is beloved by a very devoted
              cadre of fans, who line the stranger corners of the internet with
              all sorts of fan art and memes dedicated to their favorite actor.
              From Oscar nominated prestige dramas to Marvel superhero tentpole
              blockbusters, there was no limit to Cumberbatch's range, one might
              even call him a leading man disguised as an eccentric character
              actor. Born on July 19. 1976 in London to actors Timothy Carlton
              and Wanda Ventham, Cumberbatch came from literal royalty: his
              third cousin sixteen times removed was Richard III. While away at
              boarding school, Cumberbatch became interested in acting. He made
              his stage debut at the age of 12, playing Titania, Queen of the
              Fairies, in a school production of "A Midsummer Night's Dream."
              Before university, Cumberbatch took a gap year to teach English at
              a Tibetan monastery, which began a ltook a gap year to teach
              English at a Tibetan monastery, which began a l
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.title}>Highest scores movies</div>
          <div className={classes["highest-scored"]}>{highestRatedList}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ActorInformation;
