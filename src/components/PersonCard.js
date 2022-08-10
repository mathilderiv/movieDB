import React from "react";

import { Link } from "react-router-dom";

function PersonCard({ person }) {
  return (
    <div className="card col-12 col-md-4 col-lg-3">
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <img
          style={{ height: "150px", width: "90px", objectFit: "contain" }}
          src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
          alt={person.profile_path}
        />

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

          {person.known_for[2] ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${person.known_for[2].poster_path}`}
              className="card-img-top"
              alt={person.known_for[2].original_title}
            />
          ) : null}

          {person.known_for[3] ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${person.known_for[3].poster_path}`}
              className="card-img-top"
              alt={person.known_for[2].original_title}
            />
          ) : null}
        </div>

        <p className="card-text"></p>
      </div>
    </div>
  );
}

export default PersonCard;
