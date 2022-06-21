import React from "react";
import "./Appoinment.css";
const Appoinment = () => {
  return (
    <>
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
            <button className="specs-btn">About me</button>
          </div>
        </div>
      </div>
      <div className="appointment-details">
        <div>
          <p className="appointment-para">Appoinment</p>
        </div>
        <div>
          <p className="appointment-para2">21th January 2021, 7:43 AM</p>
        </div>
      </div>
      <div className="appointment-details">
        <div>
          <p className="appointment-para">Specilization</p>
        </div>
        <div>
          <p className="appointment-para2">Orthopedic</p>
        </div>
      </div>
      <div className="appointment-details">
        <div>
          <p className="appointment-para">Patient Symptoms</p>
        </div>
        <div>
          <p className="appointment-para2">Tendons or Muscle Pain </p>
        </div>
      </div>
      <div className="appointment-footer">
        <div className="appointment-box">
          <div>
            <p style={{ fontWeight: "500" }}>Total</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>RS.4747.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appoinment;
