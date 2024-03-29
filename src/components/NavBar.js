import React from "react";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#2f4f4f",
        height: "5rem",
        marginBottom: "2%",
      }}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="#">
          Menu
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tv">
                TV
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/person">
                People
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
