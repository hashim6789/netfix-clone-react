import React, { useEffect, useRef, useState } from "react";
import "./titleCard.css";
import cardData from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const url = `https://api.themoviedb.org/3/movie/${
    category ? category : "now_playing"
  }?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmE1MzRhNWQxOGJiYzFhNWJhYmIzZjNmNWQ5MjhlZSIsIm5iZiI6MTczMjM0MTA0OC41NzI0NzM1LCJzdWIiOiI2NzQxNmI2YmNjZTY2Y2Y4OTllOTRlODQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oVsNrEIJKrV3qxUriYYcCCJAVo6JlCeOZD9ekOrqnRQ",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setApiData(json.results))
      .catch((err) => console.error(err));
    const handleWheel = (e) => {
      e.preventDefault();
      cardRef.current.scrollLeft += e.deltaY;
    };
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titleCards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
