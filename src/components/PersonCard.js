import React from "react";

import { Link } from "react-router-dom";

function PersonCard({ person }) {
  return (
    <div className="card col-12 col-md-4 col-lg-3">
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p>Known for</p>
        <div className="known-for">
          <img
            src={`https://image.tmdb.org/t/p/w300${person.known_for[0].poster_path}`}
            className="card-img-top"
            alt={person.known_for[0].original_title}
          />
          <img
            src={`https://image.tmdb.org/t/p/w300${person.known_for[1].poster_path}`}
            className="card-img-top"
            alt={person.known_for[1].original_title}
          />

          {/* {person.known_for[2].poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${person.known_for[2].poster_path}`}
            className="card-img-top"
            alt={person.known_for[2].original_title}
          />
        ) : (
          <p>Picture not available</p>
        )} */}
        </div>

        {/* <p className="card-text">{person.overview}</p>
        <Link to={`/person/${person.id}`} className="btn btn-primary">
          person description
        </Link> */}
      </div>
    </div>
  );
}

export default PersonCard;
