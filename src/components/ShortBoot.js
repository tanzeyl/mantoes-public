import React from "react";
import SB1 from "../images/Short Boot 1.png";
import SB2 from "../images/Short Boot 2.png";
import SB3 from "../images/Short Boot 3.png";
import SB4 from "../images/Short Boot 4.png";
import SB5 from "../images/Short Boot 5.png";
import SB6 from "../images/Short Boot 6.png";
import SB7 from "../images/Short Boot 7.jpg";

export default function ShortBoot() {
  return (
    <>
      <div className="mainShoeContainer">
        <div className="mainImages">
          <img
            src={SB1}
            width="300"
            height="300"
            className="d-block"
            style={{ borderRadius: "20px" }}
            alt="..."
          />
        </div>
        <div className="mainImages">
          <img
            src={SB2}
            width="300"
            height="300"
            className="d-block"
            style={{ borderRadius: "20px" }}
            alt="..."
          />
        </div>
        <div className="mainImages">
          <img
            src={SB3}
            width="300"
            height="300"
            className="d-block"
            style={{ borderRadius: "20px" }}
            alt="..."
          />
        </div>
        <div className="mainImages">
          <img
            src={SB4}
            width="300"
            height="300"
            className="d-block"
            style={{ borderRadius: "20px" }}
            alt="..."
          />
        </div>
        <div className="mainImages">
          <img
            src={SB5}
            width="300"
            height="300"
            className="d-block"
            style={{ borderRadius: "20px" }}
            alt="..."
          />
        </div>
        <div className="mainImages">
          <img
            src={SB6}
            width="300"
            height="300"
            className="d-block"
            style={{ borderRadius: "20px" }}
            alt="..."
          />
        </div>
        <div className="mainImages">
          <img
            src={SB7}
            width="300"
            height="300"
            className="d-block"
            style={{ borderRadius: "20px" }}
            alt="..."
          />
        </div>
      </div>
    </>
  );
}
