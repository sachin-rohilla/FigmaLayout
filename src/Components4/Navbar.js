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
            <a href="/">Pysiotherepy</a>
          </li>
          <li>
            <a href="/">HomeCare</a>
          </li>
          <li>
            <a href="/">Business</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <button className="nav-btn">
              <i class="fa fa-phone"></i> 7015920486
            </button>
          </li>
        </ul>
        <div className="nav-child">
          <p className="nav-child-para">
            <i class="fas fa-map-marker-alt"></i> Guragon,Delhi NCR
          </p>
          <p className="nav-child-para">
            {" "}
            <i class="fa fa-search"></i>{" "}
            <span style={{ padding: "0px 10px" }}>Seacrh</span>
          </p>
          <p className="nav-child-para">
            <span style={{ color: "#6F359E" }}>
              <i class="fa fa-file-archive-o"></i> Upload Prescription
            </span>
          </p>
          <button className="login">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
