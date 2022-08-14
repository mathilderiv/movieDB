import React from "react";

import { Link } from "react-router-dom";

function Card({ movie }) {
  return (
    <div
      className="card col-12 col-md-4 col-lg-3"
      style={{ border: "#2f4f4f 1px solid", marginBottom: "2%" }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <p className="card-text">{movie.overview}</p>
        <Link to={`/movie/${movie.id}`} className="btn">
          Movie description
        </Link>
      </div>
    </div>
  );
}

export default Card;
