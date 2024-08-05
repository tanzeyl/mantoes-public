import React from "react";
import LB1 from "../images/Long Boot 1.png";
import LB2 from "../images/Long Boot 2.png";
import LB3 from "../images/Long Boot 3.png";
import LB4 from "../images/Long Boot 4.png";
import LB5 from "../images/Long Boot 5.png";
import LB6 from "../images/Long Boot 6.png";
import SB1 from "../images/Short Boot 1.png";
import SB2 from "../images/Short Boot 2.png";
import SB3 from "../images/Short Boot 3.png";
import SB4 from "../images/Short Boot 4.png";
import SB5 from "../images/Short Boot 5.png";
import SB6 from "../images/Short Boot 6.png";

function Shoes() {
  return (
    <>
      <div className="container-fluid shoesContainer">
        <div className="card" style={{ width: "18rem" }}>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
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
              <div className="carousel-item">
                <center>
                  <img
                    src={LB6}
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
              data-bs-target="#carouselExampleAutoplaying"
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
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div
            id="carouselExampleAutoplaying2"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
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
              data-bs-target="#carouselExampleAutoplaying2"
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
              data-bs-target="#carouselExampleAutoplaying2"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shoes;
