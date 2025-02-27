import React from "react";
import SmallLogo from "../images/Small Logo.svg";

function Footer() {
  return (
    <>
      <center>
        <div className="footer navbar-fixed-bottom">
          <img
            src={SmallLogo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top mx-2"
          />
          <br />
          Copyright Mantoes Limited
        </div>
      </center>
    </>
  );
}

export default Footer;
