import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Spinner from "../components/Spiner";

function PersonDetails() {
  const params = useParams();
  //   console.log(params);

  const [person, setPerson] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.REACT_APP_APIKEY}`
    )
      .then((request) => {
        // console.log(request);
        return request.json();
      })
      .then((response) => {
        // console.log(response);
        setPerson(response);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div className="movie-card">
      <p>{person.name}</p>
      <img src={`https://image.tmdb.org/t/p/w300${person.profile_path}`} />
      <div className="title">
        <p>Date of birth : {person.birthday}</p>
        <p>Place of birth : {person.place_of_birth}</p>
        <p>{person.biography}</p>
      </div>
    </div>
  );
}

export default PersonDetails;
