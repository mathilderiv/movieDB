import "./App.css";

import { useState, useEffect } from "react";

import Card from "./components/Card";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMovies(response.results);
        setIsLoading(false);
      });
  }, []);

  console.log(movies);

  if (isLoading) return <h2>En cours de chargement...</h2>;

  return (
    <div className="App">
      {movies.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
}

export default App;
