import React from "react";
import SB1 from "../images/Short Boot 1.png";
import SB2 from "../images/Short Boot 2.png";
import SB3 from "../images/Short Boot 3.png";
import SB4 from "../images/Short Boot 4.png";
import SB5 from "../images/Short Boot 5.png";
import SB6 from "../images/Short Boot 6.png";

export default function ShortBoot() {
  return (
    <>
      <div className="mainShoeContainer">
        <div className="card myCard mainCard" style={{ width: "40%" }}>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <center>
                  <img
                    src={SB1}
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
                    src={SB2}
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
                    src={SB3}
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
                    src={SB4}
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
                    src={SB5}
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
                    src={SB6}
                    width="300"
                    height="300"
                    className="d-block"
                    alt="..."
                  />
                </center>
              </div>
            </div>
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
              style={{ marginLeft: "4%" }}
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
