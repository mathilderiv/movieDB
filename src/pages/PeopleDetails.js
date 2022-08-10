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
        console.log(response); //ok
        setPerson(response);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div className="movie-card">
      <p>{person.name}</p>
      <div className="title"></div>
    </div>
  );
}

export default PersonDetails;
