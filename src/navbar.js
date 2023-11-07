import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-light" href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active text-light" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link text-light" to="card">
            Card
          </Link>
          <Link className="nav-item nav-link text-light" to="contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="form-inline my-2 my-lg-0 ml-auto">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
          Search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

