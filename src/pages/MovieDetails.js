import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        // console.log(response);
        setMovie(response);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h2>En cours de chargement...</h2>;
  return <div>{movie.title}</div>;
}

export default MovieDetails;
