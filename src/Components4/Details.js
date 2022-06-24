import React from "react";
import "./Details.css";

import Data from "./Data.json";
const Details = () => {
  const button = "Book Now";
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
                  <span class={item.star}></span>

                  <span
                    style={{
                      marginTop: "10px",
                      fontSize: "12px",
                      color: "#58585B",
                    }}
                  >
                    {item.reivew}
                  </span>
                  <p className="para4">{item.experirence}</p>
                </div>
                <div>
                  <button className="btn1">{button}</button>
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
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span
                    style={{
                      marginTop: "10px",
                      fontSize: "12px",
                      color: "#58585B",
                    }}
                  >
                    {item.reivew}
                  </span>
                  <p className="para4">{item.experirence}</p>
                </div>
                <div>
                  <button className="btn1">{button}</button>
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
