import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="section-container">
      <div className="form-container">
        <form className="form">
          <div className="form-para">
            <p style={{ fontWeight: "bold" }}>
              {" "}
              <i class="fa fa-phone" style={{ opacity: "0.5" }}></i>{" "}
              +91-7015920486
            </p>
            <p style={{ fontSize: "15px" }}>
              Or fill out below form to enquiry
            </p>
          </div>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Phone Number" />
          <input type="text" placeholder="Your Email" />
          <select className="interest">
            <option>Interseted in</option>
          </select>
          <div className="textarea">
            <p style={{ marginBottom: "40px" }}>Your Message (Optional)</p>
          </div>
          <button className="form-btn">Submit</button>
          <p className="note">
            *particular Lorem do dorore calim in mobile conselur ipsum minpim
            esse memmet
          </p>
        </form>

        <div>
          <div className="grid-1" style={{ marginBottom: "35px" }}>
            <p className="register-para">Other Office</p>
            <div className="grid-box">
              <div className="box-1">
                <p className="box-para1">
                  <i class="fa fa-phone" style={{ margin: "10px" }}></i>{" "}
                  +91-7015920486
                </p>
                <p className="box-para2">
                  {" "}
                  <i class="fa fa-envelope" style={{ margin: "10px" }}></i>{" "}
                  contact@weelu.com
                </p>
              </div>
              <div className="box-2">
                <p className="box-para3">
                  {" "}
                  Weelu Solution Pvt Ltd Vindya C4,IITH Hyderabad,Gachibowli
                </p>
                <button className="box-btn">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-1">
          <p className="register-para">Registered Office</p>
          <div className="grid-box">
            <div className="box-1">
              <p className="box-para1">
                <i class="fa fa-phone" style={{ margin: "10px" }}></i>{" "}
                +91-7015920486
              </p>
              <p className="box-para2">
                {" "}
                <i class="fa fa-envelope" style={{ margin: "10px" }}></i>{" "}
                contact@weelu.com
              </p>
            </div>
            <div className="box-2">
              <p className="box-para3">
                {" "}
                Weelu Solution Pvt Ltd Vindya C4,Odisha
              </p>
              <button className="box-btn">Get Directions</button>
            </div>
          </div>
        </div>
        <div className="grid-1">
          <p className="register-para">Corporate Office</p>
          <div className="grid-box">
            <div className="box-1">
              <p className="box-para1">
                <i class="fa fa-phone" style={{ margin: "10px" }}></i>{" "}
                +91-7015920486
              </p>
              <p className="box-para2">
                {" "}
                <i class="fa fa-envelope" style={{ margin: "10px" }}></i>{" "}
                contact@weelu.com
              </p>
            </div>
            <div className="box-2">
              <p className="box-para3">
                {" "}
                Weelu Solution Pvt Ltd Vindya C4,IITH Hyderabad,Gachibowli
              </p>
              <button className="box-btn">Get Directions</button>
            </div>
          </div>
        </div>
        <div className="grid-1">
          <p className="register-para">Other Office</p>
          <div className="grid-box">
            <div className="box-1">
              <p className="box-para1">
                <i class="fa fa-phone" style={{ margin: "10px" }}></i>{" "}
                +91-7015920486
              </p>
              <p className="box-para2">
                {" "}
                <i class="fa fa-envelope" style={{ margin: "10px" }}></i>{" "}
                contact@weelu.com
              </p>
            </div>
            <div className="box-2">
              <p className="box-para3">
                {" "}
                Weelu Solution Pvt Ltd Vindya C4,IITH Hyderabad,Gachibowli
              </p>
              <button className="box-btn">Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
