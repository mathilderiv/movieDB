import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DisplayStars from "../components/DisplayStars";
import Spinner from "../components/Spiner";

function MovieDetails() {
  const params = useParams();
  //   console.log(params);

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_APIKEY}`
    )
      .then((request) => {
        return request.json();
      })
      .then((response) => {
        console.log(response);
        setMovie(response);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div className="movie-card">
      <div className="title">
        <h2>{movie.title}</h2>
        <p>
          {DisplayStars(movie.vote_average)}{" "}
          <span style={{ color: "#2f4f4f" }}>{movie.vote_count} reviews</span>
        </p>
        <p style={{ color: "#2f4f4f", fontWeight: "bold" }}>
          Release date : {movie.release_date}
        </p>
      </div>
      <div className="image">
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        />
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
