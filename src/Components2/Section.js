import React from "react";
import "./Section.css";
const Section = () => {
  return (
    <>
      <div className="sec-container">
        <div className="sec-item">
          <button className="sec-btn"> Download Invoice</button>
        </div>
      </div>
      <div className="sec-para-container">
        <div className="sec-heading">
          <h2 style={{ color: "#71BF8C" }}> Payment Completed</h2>
        </div>
        <div className="sec-para">
          <p className="sec-paragraph">
            Our Pyschotherepy at home in Guragaon are highly skilled and
            knowledgble with a caring and professional approch to your
            rehabillation needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section;
