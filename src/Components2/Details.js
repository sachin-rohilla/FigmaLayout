import React from "react";
import "./Details.css";
const Details = () => {
  return (
    <div className="doc-container">
      <div className="doc-item">
        <div className="img-container">
          <div className="img-item">
            <img
              src="https://previews.123rf.com/images/lithian/lithian1602/lithian160200034/52548478-portrait-of-an-attractive-young-female-doctor-in-white-coat-.jpg"
              width="100px"
              alt="doctor"
            />
          </div>
          <div className="img-item">
            <h4>Dr.Jasmine</h4>
            <p className="details-para">Language:English</p>
            <h5 className="details-heading">Ortho Care Clinics Chennai</h5>
          </div>
        </div>
      </div>
      <div className="doc-item">
        <div className="specs-container">
          <div className="specs-item">
            <p>Appointment Date&Time</p>
            <p>21th Jan 2007 7:47AM</p>
          </div>
          <div className="specs-item">
            <h4>RS. 4747</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
