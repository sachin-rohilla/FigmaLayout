import React from "react";
import "./SectionList.css";
const SectionList = () => {
  return (
    <>
      <div className="sectionListContainer">
        <div>
          <h4 className="sectionList-para">OTHER SERVICES</h4>
          <p className="sectionList-para">HomeCare Services</p>
          <p className="sectionList-para">Pyschothereapy</p>
          <p className="sectionList-para">Nursing</p>
          <p className="sectionList-para">Medical Equipment</p>
          <p className="sectionList-para">AIS</p>
        </div>
        <div>
          <h4 className="sectionList-para">ABOUT US</h4>
          <p className="sectionList-para">Testimonials</p>
          <p className="sectionList-para">Refund/Cancel Policy</p>
          <p className="sectionList-para">Privacy Policy</p>
        </div>
        <div>
          <h4 className="sectionList-para">FOLLOW US</h4>
          <p className="sectionList-para">Twitter</p>
          <p className="sectionList-para">Linkedin</p>
          <p className="sectionList-para">Facebook</p>
          <p className="sectionList-para">Youtube</p>
        </div>
      </div>
      <div className="sectionList-footer">
        <div>
          <p className="sectionList-para2">
            @ 2020 Plus Pin. All rights reserved
          </p>
        </div>
        <div>
          <button className="sectionList-btn">UseFull Links</button>
        </div>
        <div>
          <p className="sectionList-para3">
            Can't find What you're looking for?
            <span style={{ color: "#2D99DA",fontWeight:"bold"}}> Ask Us</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionList;
