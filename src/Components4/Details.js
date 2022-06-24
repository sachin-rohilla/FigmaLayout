import React from "react";
import "./Details.css";

import Data from "./Data.json";
const Details = () => {
  return (
    <>
      <h2 className="main-heading">Select Clinic</h2>

      {Data.map((item) => {
        return (
          <>
            <div className="details-container">
              <div className="main">
                <div>
                  <img src={item.image} width="100px" alt="doctor" />
                </div>
                <div>
                  <p className="para1">{item.heading}</p>
                  <p className="para2">{item.name}</p>
                  <p className="para3">{item.title}</p>
                  <p className="para4">{item.experirence}</p>
                </div>
                <div>
                  <button className="btn1">{item.button}</button>
                </div>
              </div>
              <div className="main">
                <div>
                  <img src={item.image} width="100px" alt="doctor" />
                </div>
                <div>
                  <p className="para1">{item.heading}</p>
                  <p className="para2">{item.name}</p>
                  <p className="para3">{item.title}</p>
                  <p className="para4">{item.experirence}</p>
                </div>
                <div>
                  <button className="btn1">{item.button}</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Details;
