import React from "react";

function Card({ movie }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <p className="card-text">{movie.overview}</p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
}

export default Card;
