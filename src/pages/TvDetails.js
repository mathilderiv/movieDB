import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../components/Spiner";
import DisplayStars from "../components/DisplayStars";

function TvDetails() {
  const params = useParams();

  const [tv, setTv] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}?api_key=${process.env.REACT_APP_APIKEY}`
    )
      .then((request) => {
        return request.json();
      })
      .then((response) => {
        console.log(response);
        setTv(response);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div>
      {tv.name}
      <img
        src={`https://image.tmdb.org/t/p/w300${tv.poster_path}`}
        alt={tv.name}
      />
      <p>
        {DisplayStars(tv.vote_average)} <span>{tv.vote_count} reviews</span>
      </p>
      <p> Number of seasons : {tv.number_of_seasons}</p>
      <p> Number of episodes : {tv.number_of_episodes}</p>
      <p>{tv.overview}</p>
    </div>
  );
}

export default TvDetails;
