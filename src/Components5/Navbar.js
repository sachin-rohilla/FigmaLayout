import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <h1 style={{ color: "#6F359E" }}>Plus Pin</h1>
          </li>
          <li>
            <a href="/">Diagonostics</a>
          </li>
          <li>
            <select
              style={{
                border: "none",
                background: "#FAFAFA",
                fontSize: "14px",
              }}
            >
              <option>Homecare</option>
            </select>
          </li>
          <li>
            <a href="/">Pysiotherepy</a>
          </li>
          <li>
            <a href="/">Rent Equipment</a>
          </li>
          <li>
            <a href="/">Pluspin for Business</a>
          </li>
          <li>
            <select
              style={{
                border: "none",
                background: "#FAFAFA",
                fontSize: "14px",
                color: "#6F359E",
              }}
            >
              <option>Contact</option>
            </select>
          </li>
          <li>
            <button className="nav-btn">
              <i class="fa fa-phone"></i> 7015920486
            </button>
          </li>
        </ul>
        <div className="nav-child">
          <p className="nav-child-para">
            <i class="fas fa-map-marker-alt" style={{ margin: "5px" }}></i>{" "}
            Kukatpally,Hyderabad
          </p>
          <p className="nav-child-para">
            {" "}
            <input
              type="text"
              placeholder="Search here"
              style={{
                border: "none",
                margin: "0",
                fontSize: "15px",
                textAlign: "center",
              }}
            />
          </p>
          <p className="nav-child-para">
            <span style={{ color: "#6F359E" }}>
              <i
                class="fa fa-file-archive-o"
                style={{ marginRight: "10px" }}
              ></i>{" "}
              <span style={{ fontWeight: "bold" }}>Upload Prescription</span>
            </span>
          </p>
          <button className="login">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
