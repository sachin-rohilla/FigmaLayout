import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div className="home">
        <p className="home-para">Home > </p>
        <p className="home-para">Doctor Consultation</p>
        <p className="home-para">
          <span style={{ color: "black" }}>ORTHOPEDICIAN</span>
        </p>
      </div>
      <div className="profile-container">
        <div>
          <img
            src="https://previews.123rf.com/images/lithian/lithian1602/lithian160200034/52548478-portrait-of-an-attractive-young-female-doctor-in-white-coat-.jpg"
            width="125px"
            alt="doctor"
          />
        </div>
        <div className="profile-para">
          <p className="para1">Orthopeadic</p>
          <p className="para2">
            Dr.Jasmine{" "}
            <span
              style={{ margin: "10px", color: "#58585B", fontSize: "10px" }}
            >
              MBBS,MS,DNB-Orth
            </span>
          </p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked">
            {" "}
            <span
              style={{ marginTop: "10px", fontSize: "12px", color: "#58585B" }}
            >
              {" "}
              112 Reviews
            </span>
          </span>
          <p className="para3">9 Years+Experience</p>
          <p className="para4">
            <span style={{ color: "#2D99DA", fontSize: "11px" }}>
              About me video
            </span>
          </p>
        </div>

        <div>
          <button className="profile-btn1">Audio&Video</button>
        </div>
        <div>
          <button className="profile-btn2"> Home</button>
        </div>
        <div>
          <button className="profile-btn3">Clinic</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
