import React from 'react'
import { useState } from "react";
const Nursing = () => {
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
              What is Nursing Care?
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
              Why Nursing?
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
              What is the cost of Nursing care in hyderabad?
            </p>
            <p className="question-para2">{thirdPara}</p>
          </div>
          <div>
            <button onClick={plusHandlerThird} className="question-btn">
              {thirdSign}
            </button>
          </div>
        </div>
    </>
  )
}

export default Nursing