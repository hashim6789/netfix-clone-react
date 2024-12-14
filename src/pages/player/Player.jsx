import React, { useEffect, useState } from "react";
import "./player.css";
import backArrowIcon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
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
      .then((json) => setApiData(json.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="player">
      <img src={backArrowIcon} alt="" onClick={() => navigate(-2)} />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        title="Trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  );
};

export default Player;
