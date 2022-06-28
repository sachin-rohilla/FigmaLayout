import "./Details.css";

import Grid from "@mui/material/Grid";

import Data from "./Data.json";
import { useState } from "react";
const Details = () => {
  const button = "Book Now";
  const [filter, setFiler] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [spec, setSpec] = useState("");
  const [consult, setConsult] = useState("");
  const [select, setSelect] = useState("");

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
  const stateHandler = (e) => {
    setState(e.target.value);
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
  };
  const specHandler = (e) => {
    setSpec(e.target.value);
  };
  const consultHandler = (e) => {
    setConsult(e.target.value);
  };
  const selectHandler = (e) => {
    setSelect(e.target.value);
  };

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
      <div className="dropdown">
        <p>Filter By</p>
        <div>
          <select className="select" onChange={stateHandler}>
            <option value="">State</option>
            <option>Chennai</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
          </select>
        </div>
        <div>
          <select className="select" onChange={cityHandler}>
            <option value="">City</option>
            <option value="Kollapur">Kollapur</option>
            <option value="Safdarjang">Safdarjang</option>
            <option value="Bandra">Bandra</option>
            <option value="Ooty">Ooty</option>
          </select>
        </div>
        <div>
          <select
            className="select"
            style={{ marginLeft: "0px" }}
            onChange={specHandler}
          >
            <option value="">Specilization</option>
            <option value="Orthopeadic">Orthopeadic</option>
            <option value="Brain">Brain</option>
            <option value="Heart">Heart</option>
            <option value="Liver">Liver</option>
          </select>
        </div>
        <div>
          <select className="select" onChange={consultHandler}>
            <option value=""> Consultation Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
        <div>
          <select className="select" onChange={selectHandler}>
            <option value="">Availblity</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
      </div>

      <div className="grid">
        <Grid container>
          {searchData.map((item) => {
            if (state !== "" && item.state !== state) {
              return null;
            }
            if (city !== "" && item.city !== city) {
              return null;
            }
            if (spec !== "" && item.specilization !== spec) {
              return null;
            }
            if (consult !== "" && item.consult !== consult) {
              return null;
            }
            if (select !== "" && item.availble !== select) {
              return null;
            }
            return (
              <>
                <Grid item xs={12} sm={12} lg={6}>
                  <div className="details-container" key={item.id}>
                    <div className="main">
                      <div>
                        <img src={item.image} width="109px" alt="doctor" />
                      </div>
                      <div className="details-para">
                        <p className="para1">{item.heading}</p>
                        <p className="para2">{item.name}</p>
                        <div>
                          {new Array(parseInt(item.star))
                            .fill(0)
                            .map((value) => {
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
                        <div className="price">
                          <span style={{ color: "#2D99DA" }}>
                            {" "}
                            <i class="fa fa-camera"></i>
                          </span>
                          <p style={{ marginLeft: "5px", fontWeight: "bold" }}>
                            Price: 500
                          </p>
                        </div>

                        <button className="btn1">{button}</button>
                      </div>
                    </div>
                  </div>
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
      <div className="mini-box">
        <span
          className="mini1"
          style={{ border: "none", background: "#919EAB", color: "white" }}
        >
          {"<"}
        </span>
        <span
          className="mini1"
          style={{ color: "#2D99DA", borderColor: "#2D99DA" }}
        >
          1
        </span>
        <span className="mini1">2</span>
        <span className="mini1">...</span>
        <span className="mini1">9</span>
        <span className="mini1">10</span>
        <span className="mini1">{">"}</span>
      </div>
    </>
  );
};

export default Details;
