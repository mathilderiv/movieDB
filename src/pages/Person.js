import { useState, useEffect } from "react";
import Spinner from "../components/Spiner";
import PersonCard from "../components/PersonCard";

function Person() {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_APIKEY}`)
      .then((request) => {
        return request.json();
      })
      .then((response) => {
        console.log(response);
        setPersons(response.results);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div className="container">
      <div className="row">
        {persons.map((person) => {
          return <PersonCard key={person.id} person={person} />;
        })}
      </div>
    </div>
  );
}

export default Person;
