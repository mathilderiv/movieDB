import React from "react";

import { Link } from "react-router-dom";

function TvCard({ tv }) {
  return (
    <div className="card col-12 col-md-4 col-lg-3">
      <img
        src={`https://image.tmdb.org/t/p/w300${tv.poster_path}`}
        className="card-img-top"
        alt={tv.name}
      />
      <div className="card-body">
        <h5 className="card-title">{tv.name}</h5>
        <p className="card-text">{tv.overview}</p>
        <Link to={`/tv/${tv.id}`} className="btn btn-primary">
          Tv description
        </Link>
      </div>
    </div>
  );
}

export default TvCard;
