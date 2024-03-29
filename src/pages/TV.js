import { useState, useEffect } from "react";
import TvCard from "../components/TvCard";
import Spinner from "../components/Spiner";

function TV() {
  const [tvShows, setTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_APIKEY}&page=1`
    )
      .then((request) => {
        return request.json();
      })
      .then((response) => {
        // console.log(response);
        setTvShows(response.results);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div className="container">
      <div className="row">
        {tvShows.map((tv) => {
          return <TvCard key={tv.id} tv={tv} />;
        })}
      </div>
    </div>
  );
}

export default TV;
