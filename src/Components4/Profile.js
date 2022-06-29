import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div className="profile-main">
        <div className="home">
          <p className="home-para">Home {">"}</p>
          <p className="home-para">Doctor Consultation</p>
          <p className="home-para">
            <span style={{ color: "black" }}>ORTHOPEDICIAN</span>
          </p>
        </div>
        <h2 style={{ fontFamily: "Manrope" }} className="profile-heading">
          Best Orthopedician in Banglore
        </h2>
      </div>
    </>
  );
};

export default Profile;
