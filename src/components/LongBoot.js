import React from "react";
import LB1 from "../images/Long Boot 1.png";
import LB2 from "../images/Long Boot 2.png";
import LB3 from "../images/Long Boot 3.png";
import LB4 from "../images/Long Boot 4.png";
import LB5 from "../images/Long Boot 5.png";
import LB6 from "../images/Long Boot 6.png";

export default function LongBoot() {
  return (
    <>
      <div className="mainShoeContainer">
        <div className="card myCard mainCard">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <center>
                  <img
                    src={LB1}
                    width="300"
                    height="300"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={LB2}
                    width="300"
                    height="300"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={LB3}
                    width="300"
                    height="300"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={LB4}
                    width="300"
                    height="300"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={LB5}
                    width="300"
                    height="300"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src={LB6}
                    width="300"
                    height="300"
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
        </div>
        <div className="contactDetails">
          <div className="details">
            <p>
              To know more about this boot or for bulk order, reach out to us
              using the below mentioned details:
            </p>
            Aqeel Khan (Owner):{" "}
            <input
              type="text"
              className="inputBox"
              value="+91-9889974434"
              readOnly
            />
            <br />
            Riyaz Ahmad (Manager):{" "}
            <input
              type="text"
              className="inputBox"
              value="+91-8090380913"
              readOnly
            />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
