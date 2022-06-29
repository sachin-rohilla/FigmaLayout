import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <span style={{ fontSize: "25px" }}>
        <i class="fa fa-phone"></i>
      </span>
      <p style={{ fontSize: "20px", fontFamily: "Manrope" }}>Enquiry Now</p>
      <span style={{ fontSize: "25px" }}>
        <i class="fa fa-whatsapp"></i>
      </span>
    </div>
  );
};

export default Footer;
