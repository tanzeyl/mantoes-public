import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contactContainer">
        <div className="contactDetails">
          <div className="details">
            <p>
              To know more about this boot or for bulk order, reach out to us
              using the below mentioned details:
            </p>
            Aqeel Khan (Owner):{" "}
            <input
              type="text"
              style={{ marginLeft: "2%" }}
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
