import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-item1">
          <a href="/" className="footer-link">
            Download Our App
          </a>
          <h2 className="footer-heading">
            To Manage Your appointment download app from Play Store
          </h2>
          <p className="footer-para">
            {" "}
            Jolly good quiant bond victoria sponge happy days cras are over
            biatant.
          </p>
        </div>
        <div className="footer-item2">
          <img
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022020/app-store_google-play.jpg?27ILGodZ2NE4VzIV6r9cz_5iAnnrFp9b&itok=yQ1ktLd5"
            alt="play"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
