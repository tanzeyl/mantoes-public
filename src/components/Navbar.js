import React from "react";
import { Link } from "react-router-dom";
import SmallLogo from "../images/Small Logo.svg";
import "../App.css";

function Navbar() {
  return (
    <>
      <center>
        <nav className="navbar myNav">
          <div className="container-fluid">
            <div className="logo">
              <Link className="navbar-brand" to="/">
                <img
                  src={SmallLogo}
                  alt="Logo"
                  width="40"
                  height="40"
                  className="d-inline-block align-text-top mx-2"
                />
                <span className="logoText">Mantoes</span>
              </Link>
            </div>
            <Link className="navbar-brand welcomeText" to="/">
              Welcome to our web store!
            </Link>
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
              <hr className="line" />
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                  <hr className="line" />
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </center>
    </>
  );
}

export default Navbar;
