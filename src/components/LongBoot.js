import React from "react";
import LB1 from "../images/Long Boot 1.png";
import LB2 from "../images/Long Boot 2.png";
import LB3 from "../images/Long Boot 3.png";
import LB4 from "../images/Long Boot 4.png";
import LB5 from "../images/Long Boot 5.png";

export default function LongBoot() {
  return (
    <>
      <div className="mainShoeContainer">
        <img
          src={LB1}
          width="300"
          height="300"
          className="d-block ``mainImages``"
          alt="..."
        />
        <img
          src={LB2}
          width="300"
          height="300"
          className="d-block ``mainImages``"
          alt="..."
        />
        <img
          src={LB3}
          width="300"
          height="300"
          className="d-block ``mainImages``"
          alt="..."
        />
        <img
          src={LB4}
          width="300"
          height="300"
          className="d-block ``mainImages``"
          alt="..."
        />
        <img
          src={LB5}
          width="300"
          height="300"
          className="d-block ``mainImages``"
          alt="..."
        />
      </div>
    </>
  );
}
