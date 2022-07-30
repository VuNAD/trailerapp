import React from "react";
import classes from "./trailerDetails.module.css";
import Actor from "../actor/Actor";
import { useState } from "react";
import {Link} from "react-router-dom"

const ACTOR_LISTS = [
  {
    id: "a1",
    img: "https://static2.yan.vn/YanNews/2167221/202204/atti4-1-b61e00c3.jpg",
    name: "Benedict Cumberbatch",
    role: "Doctor Stephen Strange",
  },
  {
    id: "a2",
    img: "https://i.pinimg.com/originals/2d/08/8c/2d088caf851e40e3b0d3fd5890f2cd71.jpg",
    name: " Elizabeth Olsen",
    role: "Wanda Maximoff, The Scarlet Witch",
  },
  {
    id: "a3",
    img: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fc829487c-80d1-11eb-b349-cb6bdd05284f.jpg?crop=1000%2C1500%2C625%2C0",
    name: "Chiwetel Ejiofor",
    role: "Baron Mordo",
  },
  {
    id: "a4",
    img: "https://www.themoviedb.org/t/p/original/ukmfsl59Isvn9odgzMWBidA3cmt.jpg",
    name: "Benedict Wong",
    role: "Wong",
  },
  {
    id: "a5",
    img: "https://m.media-amazon.com/images/M/MV5BZThmZTdjZWItNjEzNC00MTgzLWIzMGUtYzEzZDgwOTI1NjMxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg",
    name: "Xochitl Gómez",
    role: "America Chavez",
  },
  {
    id: "a6",
    img: "https://www.themoviedb.org/t/p/original/wQwORFTmllPe8mfruNhxIDFBMKk.jpg",
    name: "Patrick Stewart",
    role: "Professor Charles Xavier",
  },
  // {
  //   id: "a7",
  //   img: "https://cinepluscambodia.com/wp-content/uploads/2017/06/c60WxtQceDxOp7sd2iWhOqn5Y2l.jpg",
  //   name: "Rachel McAdams",
  //   role: "Dr. Christine Palmer",
  // },
];

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={classes.text}>
      {isReadMore ? text.slice(0, 850) : text}
      <span onClick={toggleReadMore} className={classes["read-or-hide"]}>
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};

const TrailerDetails = () => {
  const actorList = ACTOR_LISTS.map((actor, index) => (
    <Link to={{ pathname: "/actorinformation" }} style={{ textDecoration: "none" }}>
      <Actor
        key={actor.id}
        name={actor.name}
        img={actor.img}
        role={actor.role}
      />
    </Link>
  ));

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <img
          src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg"
          alt=""
          className={classes.poster}
        />
        <div className={classes.details}>
          <div className={classes["movie-details"]}>
            Movie Details & Credits
          </div>
          <div className={classes.release}>
            Release Date: April 22, 2022 | PG
          </div>
          <div className={classes.summary}>
            <ReadMore>
              Summary: Never have there been five friends as infamous as The Bad
              Guys—dashing pickpocket Mr. Wolf (Sam Rockwell), seen-it-all
              safecracker Mr. Snake (Marc Maron), chill master-of-disguise Mr.
              Shark (Craig Robinson), short-fused “muscle” Mr. Piranha (Anthony
              Ramos) and sharp-tongued expert hacker Ms. Tarantula (Awkwafina),
              aka “Webs.” But when,… Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero distinctio porro nihil unde fuga ex neque
              quos debitis, accusamus consequatur. Expedita iure quibusdam
              itaque nam doloremque. Fuga ipsam illo minus corrupti dolore,
              tempore quaerat minima explicabo adipisci sint beatae ipsa? Never
              have there been five friends as infamous as The Bad Guys—dashing
              pickpocket Mr. Wolf (Sam Rockwell), seen-it-all safecracker Mr.
              Snake (Marc Maron), chill master-of-disguise Mr. Shark (Craig
              Robinson), short-fused “muscle” Mr. Piranha (Anthony Ramos) and
              sharp-tongued expert hacker Ms. Tarantula (Awkwafina), aka “Webs.”
              But when,… Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vero distinctio porro nihil unde fuga ex neque quos debitis,
              accusamus consequatur. Expedita iure quibusdam itaque nam
              doloremque. Fuga ipsam illo minus corrupti dolore, tempore quaerat
              minima explicabo adipisci sint beatae ipsa?
            </ReadMore>
          </div>
          <div className={classes.genre}>
            Genre(s): Adventure, Comedy, Crime, Animation, Family
          </div>
          <div className={classes.time}>Runtime: 100 min</div>
        </div>
      </div>
      <div className={classes["actor-container"]}>
        <div className={classes.title}>ACTOR & ROLE</div>
        <div className={classes.actor}>{actorList}</div>
      </div>
    </div>
  );
};

export default TrailerDetails;
