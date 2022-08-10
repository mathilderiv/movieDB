import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../components/Spiner";

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
  return <div>{tv.name}</div>;
}

export default TvDetails;
