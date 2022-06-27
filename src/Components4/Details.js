import "./Details.css";

import Data from "./Data.json";
import { useState } from "react";
const Details = () => {
  const button = "Book Now";
  const [filter, setFiler] = useState("");

  const searchContent = (e) => {
    setFiler(e.target.value);
  };
  let searchData = Data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toUpperCase()
        .includes(filter.toString().toUpperCase())
    );
  });

  return (
    <>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Search here"
          value={filter}
          onChange={searchContent.bind(this)}
        />
        <button className="input-button"> Search </button>
      </div>

      <div className="flex-container">
        {searchData.map((item) => {
          return (
            <>
              <div className="details-container" key={item.id}>
                <div className="main">
                  <div>
                    <img src={item.image} width="109px" alt="doctor" />
                  </div>
                  <div className="details-para">
                    <p className="para1">{item.heading}</p>
                    <p className="para2">{item.name}</p>
                    <div>
                      {new Array(parseInt(item.star)).fill(0).map((value) => {
                        return <span class="fa fa-star"></span>;
                      })}
                      <span style={{ fontSize: "11px", marginLeft: "5px" }}>
                        {item.reivew}
                      </span>
                    </div>
                    <p className="para3">{item.title}</p>

                    <span
                      style={{
                        marginTop: "10px",
                        fontSize: "12px",
                        color: "#58585B",
                      }}
                    ></span>
                    <p className="para4">{item.experirence}</p>
                  </div>
                  <div className="details-btn">
                    <button className="btn1">{button}</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Details;
