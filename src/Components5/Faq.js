import React, { useState } from "react";
import Nursing from "./Nursing";
import "./Faq.css";
import Home from "./Home";
import Other from "./Other";
import General from "./General";
const Faq = () => {
  const [show, setShow] = useState("");

  const homeHandler = () => {
    setShow(<Home />);
  };
  const nursingHandler = () => {
    setShow(<Nursing />);
  };

  const otherHandler = () => {
    setShow(<Other />);
  };
  const generalHandler = () => {
    setShow(<General />);
  };
  return (
    <>
      <div className="faq-main">
        <div className="faq-container">
          <p className="faq-para1">Frequently Asked Questions</p>
          <div>
            {/* <ul>
              <li className="faq-anchor" ><a href="/" style={{ color: "#EE8F83" }} className="faq-anchor">General</a></li>
              <li className="faq-anchor"><a href="/" className="faq-anchor" onClick={homehandler}>Homecare</a></li>
              <li className="faq-anchor"><a href="/" className="faq-anchor">Nursing</a></li>
              <li className="faq-anchor"><a href="/" className="faq-anchor">Othertopics</a></li>
            </ul> */}
            <button className="faq-general-btn" onClick={generalHandler}>
              General
            </button>
            <button className="faq-btn" onClick={homeHandler}>
              Homecare
            </button>
            <button className="faq-btn" onClick={nursingHandler}>
              Nursing
            </button>
            <button className="faq-btn" onClick={otherHandler}>
              Othertopics
            </button>
          </div>
        </div>

        <div>{show || <General />}</div>
      </div>
    </>
  );
};

export default Faq;
