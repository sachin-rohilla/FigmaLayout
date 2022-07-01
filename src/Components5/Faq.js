import React, { useState } from "react";
import "./Faq.css";
const Faq = () => {
  const [firstPara, setFirstPara] = useState("");
  const [secondPara, setSecondPara] = useState("");
  const [thirdPara, setThirdPara] = useState("");
  const [firstSign, setFirstSign] = useState("+");
  const [secondSign, setSecondSign] = useState("+");
  const [thirdSign, setThirdSign] = useState("+");

  const plusHandler = () => {
    if (firstSign === "+") {
      setFirstPara(
        "Our Physiothterapy service at home in Hyderaba are highly skilled and knowledgeable with a caring and professional approach to your rehabilitaion needs. as we knwo that our patient need flexiblity and more options to book appointments"
      );
      setFirstSign("-");
    } else {
      setFirstPara("");
      setFirstSign("+");
    }
  };
  const plusHandlerSecond = () => {
    if (secondSign === "+") {
      setSecondPara(
        "Our Physiothterapy service at home in Hyderaba are highly skilled and knowledgeable with a caring and professional approach to your rehabilitaion needs. as we knwo that our patient need flexiblity and more options to book appointments"
      );
      setSecondSign("-");
    } else {
      setSecondPara("");
      setSecondSign("+");
    }
  };
  const plusHandlerThird = () => {
    if (thirdSign === "+") {
      setThirdPara(
        "Our Physiothterapy service at home in Hyderaba are highly skilled and knowledgeable with a caring and professional approach to your rehabilitaion needs. as we knwo that our patient need flexiblity and more options to book appointments"
      );
      setThirdSign("-");
    } else {
      setThirdPara("");
      setThirdSign("+");
    }
  };
  return (
    <>
      <div className="faq-main">
        <div className="faq-container">
          <p className="faq-para1">Frequently Asked Questions</p>
          <div>
            <ul>
              <li ><a href="/" style={{ color: "#EE8F83" }} className="faq-anchor">General</a></li>
              <li><a href="/" className="faq-anchor">Homecare</a></li>
              <li><a href="/" className="faq-anchor">Nursing</a></li>
              <li><a href="/" className="faq-anchor">Other Topics</a></li>
            </ul>
            {/* <div className='faq-horizontal'></div> */}
          </div>
        </div>

        <div className="questions-container">
          <div>
            <p className="question-para1">
              {" "}
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{
                  fontSize: "25px",
                  marginRight: "15px",
                  color: "#116fff",
                }}
              ></i>{" "}
              What is Home Nursing Care?
            </p>
            <p className="question-para2">{firstPara}</p>
          </div>
          <div>
            <button onClick={plusHandler} className="question-btn">
              {firstSign}
            </button>
          </div>
        </div>
        <div className="questions-container">
          <div>
            <p className="question-para1">
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{
                  fontSize: "25px",
                  marginRight: "15px",
                  color: "#116fff",
                }}
              ></i>{" "}
              Why Pluspin?
            </p>
            <p className="question-para2">{secondPara}</p>
          </div>
          <div>
            <button onClick={plusHandlerSecond} className="question-btn">
              {secondSign}
            </button>
          </div>
        </div>
        <div className="questions-container">
          <div>
            <p className="question-para1">
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{
                  fontSize: "25px",
                  marginRight: "15px",
                  color: "#116fff",
                }}
              ></i>
              What is the cost of baby care in hyderabad?
            </p>
            <p className="question-para2">{thirdPara}</p>
          </div>
          <div>
            <button onClick={plusHandlerThird} className="question-btn">
              {thirdSign}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
