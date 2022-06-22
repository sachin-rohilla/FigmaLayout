import React from "react";
import "./Appoinment.css";
const Appoinment = () => {
  return (
    <>
      <div className="home">
        <p className="home-para">Home > </p>
        <p className="home-para">Doctor Consultation</p>
        <p className="home-para">
          <span style={{ color: "black" }}>ORTHOPEDICIAN</span>
        </p>
      </div>
      <h2 className="main-heading">Appointment Confirmation</h2>
      <div className="box-shadow">
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
                <span style={{ color: "#2D99DA", fontSize: "12px" }}>
                  <p>Orthopeadic</p>
                </span>
                <h4>Dr.Jasmine</h4>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>

                <p className="details-para">Language-English</p>
                <h5 className="details-heading">Ortho Care Clinics Kondapur</h5>
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
            <p className="appointment-para">Appoinment :</p>
          </div>
          <div>
            <p className="appointment-para2">
              21th January 2021, 7:43 AM{" "}
              <span style={{ marginLeft: "10px" }}>
                <i class="far fa-edit"></i>
              </span>
            </p>
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
          <div className="appointment-flex">
            <div>
              <p className="appointment-para3">Total : </p>
            </div>
            <div>
              <p className="appointment-para4">Rs.1025.00</p>
            </div>
          </div>
          <div className="appointment-pay">
            <button className="appointment-btn">Continue and Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appoinment;
