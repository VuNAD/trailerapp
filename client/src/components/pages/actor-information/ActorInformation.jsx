import React from "react";
import classes from "./actorInformation.module.css";
import { useState,useEffect } from "react";
import HighestRated from "./highest-rated/HighestRated";
import AllMovies from "./all-movies/AllMovies";


import ListActorImages from "./actor-image/ListActorImages";
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

const ActorInformation = () => {
  const [actorData, setActorData] = useState([])
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/actor/62e5fd30c326431bb009a81b"
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setActorData(responseData.actor);
      } catch (err) {
        // setError(err.message);
      }
    };
    sendRequest();
  }, []);
  // console.log(actorData);
  const highestRatedList = HIGHEST_RATED_MOVIES.map((movie, index) => (
    <HighestRated
      key={movie.id}
      name={movie.name}
      img={movie.img}
      rating={movie.rating}
    />
  ));
  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <img
          // src="https://static2.yan.vn/YanNews/2167221/202204/atti4-1-b61e00c3.jpg"
          src= {actorData.avatar}
          alt=""
          className={classes.avatar}
        />
        <div className={classes["actor-information"]}>
          <div className={classes["actor-name"]}>{actorData.name}</div>
          <div className={classes["actor-birthday"]}>
  {actorData.birthday}
          </div>
          <div className={classes["actor-story"]}>
            <ReadMore>
              {/* One of the most well-respected British thespians of his
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
              a Tibetan monastery, which began a lifetime of studying Buddhist
              philosophy. After earning his masters in Classical Acting at the
              London Academy of Music and Dramatic Art (LAMDA), Cumberbatch
              began working on the stage. His breakthrough in the UK came when
              he was cast as Stephen Hawking in the miniseries "Hawking" (BBC,
              2004), soon followed by an acclaimed role in the film "Amazing
              Grace" (2006). Cumberbatch next earned his first lead role, in the
              miniseries "The Last Enemy" (BBC, 2008), before landing the part
              that would make him a cause celebrae on both sides of the pond:
              Sherlock Holmes. "Sherlock" (BBC/PBS, 2012-) was a thoroughly
              modern take on Arthur Conan Doyle's classic sleuth: Cumberbatch's
              Holmes was acerbic and dangerous, and with Martin Freeman's Watson
              as his foil, Cumberbatch got to delightfully chew the scenery. His
              performance in the third season netted him an Emmy for Outstanding
              Lead Actor in a Miniseries or a Movie. Speaking of movies,
              Cumberbatch's next big role was as a lovesick closeted spy hunting
              down a mole in Tomas Alfredsson's acclaimed take on the John le
              Careé classic "Tinker Tailor Soldier Spy" (2011). Thanks to his
              growing online fandom, Cumberbatch soon found himself on the radar
              of major filmmakers casting big tentpole projects: for Peter
              Jackson he lended his voice to the villainous dragon Smaug across
              three films: "The Hobbit; An Unexpected Journey" (2012), "The
              Hobbit: The Desolation of Smaug" (2013), and "The Hobbit: The
              Battle of the Five Armies" (2014), while also taking on the role
              of the legendary sci-fi heavy, Khan, for JJ Abrams's "Star Trek
              Into Darkness" (2013). For his turn as Alan Turing, inventor of
              the modern computer who was tormented by British law for his
              homosexuality, in the drama "The Imitation Game" (2014),
              Cumberbatch received an Oscar nomination for Best Actor. This also
              lead to Cumberbatch signing an open letter, published in The
              Guardian on January 31, 2015, asking the British government to
              pardon all gay and bisexual men who were convicted under the same
              defunct "indecency" laws as Alan Turing. Cumberbatch was appointed
              a Commander of the Order of the British Empire (CBE) in 2015 for
              his services on behalf of the arts and charity. For his next role,
              Cumberbatch took on the titular role of "Doctor Strange" (2016) in
              Marvel's most psychedelic superhero adventure yet. He would
              reprise the role for "Avengers: Infinity War" (2018) and
              "Avengers: Endgame" (2019). Cumberbatch earned another Emmy
              nomination for his lead role in the miniseries "Patrick Melrose"
              (HBO, 2018), before taking things full circle to the beginning of
              his career by taking the job of president of LAMDA, his old alma
              mater. Cumberbatch could next be seen in Sam Mendes' World War I
              drama "1917" (2019). */}
              {actorData.information}aa
            </ReadMore>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.title}>Highest scores movies</div>
        <div className={classes["highest-scored"]}>{highestRatedList}</div>
      </div>
      <ListActorImages />
      <AllMovies/>
    </div>
  );
};

export default ActorInformation;
