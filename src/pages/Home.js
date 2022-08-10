import { useState, useEffect } from "react";

import Card from "../components/Card";
import Spinner from "../components/Spiner";

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}`
    )
      .then((request) => {
        return request.json();
      })
      .then((response) => {
        setMovies(response.results);
        setIsLoading(false);
      });
  }, []);

  console.log(movies);

  if (isLoading) return <Spinner />;

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default Home;
