import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DisplayStars from "../components/DisplayStars";
import BorderExample from "../components/Spiner";

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

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div className="movie-card">
      <div className="title">
        <h2>{movie.title}</h2>
        <p>
          {DisplayStars(movie.vote_average)}{" "}
          <span>{movie.vote_count} reviews</span>
        </p>
      </div>
      <div className="image">
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        />
        <p>{movie.overview}</p>

        <div className="bottom-title">
          <p>
            Original language : {movie.original_language}{" "}
            <span style={{ marginLeft: "1 rem" }}>
              Release date : {movie.release_date}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
