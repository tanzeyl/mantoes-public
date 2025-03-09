import React from "react";
import { Link } from "react-router-dom";
import LB1 from "../images/Long Boot 1.png";
import LB2 from "../images/Long Boot 2.png";
import LB3 from "../images/Long Boot 3.png";
import LB4 from "../images/Long Boot 4.png";
import LB5 from "../images/Long Boot 5.png";
import SB1 from "../images/Short Boot 1.png";
import SB2 from "../images/Short Boot 2.png";
import SB3 from "../images/Short Boot 3.png";
import SB4 from "../images/Short Boot 4.png";
import SB5 from "../images/Short Boot 5.png";
import SB6 from "../images/Short Boot 6.png";
import ML from "../images/Main Logo.png";

function Shoes() {
  return (
    <>
      <center>
        <div className="topDiv">
          <img src={ML} className="d-block topDivImage" alt="..." />
          <div className="text">
            <h1>This is genuine product.</h1>
            <h1>ये असली माल है। </h1>
            <h2>
              <i>The code has already been scanned.</i>
            </h2>
          </div>
        </div>
      </center>
      <div className="container-fluid shoesContainer">
        <div className="card myCard" style={{ width: "20rem" }}>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" style={{ height: "auto" }}>
              <div className="carousel-item active">
                <center>
                  <img
                    src={LB1}
                    width="200"
                    height="200"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={LB2}
                    width="200"
                    height="200"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={LB3}
                    width="200"
                    height="200"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={LB4}
                    width="200"
                    height="200"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={LB5}
                    width="200"
                    height="200"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body cardBody">
            <h5 className="card-title">
              Mantoes Genuine Leather Military Men's Boots, High Ankle, Hard
              Toe, High Top
            </h5>
            <Link className="btn btn-success" to="/longBoot">
              View Item
            </Link>
          </div>
        </div>

        <div className="card myCard" style={{ width: "20rem" }}>
          <div
            id="carouselExampleAutoplaying2"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" style={{ height: "auto" }}>
              <div className="carousel-item active">
                <center>
                  <img
                    src={SB1}
                    width="200"
                    height="200"
                    className="d-block shoeImage"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={SB2}
                    width="200"
                    height="200"
                    className="d-block shoeImage"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={SB3}
                    width="200"
                    height="200"
                    className="d-block shoeImage"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={SB4}
                    width="200"
                    height="200"
                    className="d-block shoeImage"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={SB5}
                    width="200"
                    height="200"
                    className="d-block shoeImage"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={SB6}
                    width="200"
                    height="200"
                    className="d-block shoeImage"
                    alt="..."
                  />
                </center>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body cardBody">
            <h5 className="card-title">
              Mantoes Genuine Leather Police Army Military NCC DMS Ankle Boots
              for Men
            </h5>
            <Link to="/shortBoot" className="btn btn-success">
              View Item
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shoes;
