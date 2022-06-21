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
          {/* <li>
            <a href="/">HomeCare</a>
          </li> */}
          <li>
            <a href="/">Business</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <button className="nav-btn">+91-7015920486</button>
          </li>
        </ul>
        <div className="nav-child">
          <p>Guragon,Delhi NCR</p>
          <input type="text" placeholder="Search" />
          <p>Upload Documents</p>
          <button className="login">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
