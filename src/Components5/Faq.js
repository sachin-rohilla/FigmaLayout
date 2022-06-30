import React, { useState } from "react";
import "./Faq.css";
const Faq = () => {
  const [plus, setPlus] = useState("");
  const [sign, setSign] = useState("+");

  const plusHandler = () => {
    if (sign === "+") {
      setPlus(
        "Our Physiothterapy service at home in Hyderaba are highly skilled and knowledgeable with a caring and professional approach to your rehabilitaion needs. as we knwo that our patient need flexiblity and more options to book appointments"
      );
      setSign("-");
    } else {
      setPlus("");
      setSign("+");
    }
  };
  return (
    <>
      <div className="faq-main">
        <div className="faq-container">
          <p className="faq-para1">Frequently Asked Questions</p>
          <div>
            <ul>
              <li>General</li>
              <li>Homecare</li>
              <li>Nursing</li>
              <li>Other topics</li>
            </ul>
            {/* <div className='faq-horizontal'></div> */}
          </div>
        </div>

        <div className="questions-container">
          <div>
            <p className="question-para1">What is Home Nursing Care?</p>
            <p className="question-para2">{plus}</p>
          </div>
          <div>
            <button onClick={plusHandler}>{sign}</button>
          </div>
        </div>
        <div className="questions-container">
          <div>
            <p className="question-para1">Why Pluspin?</p>
            <p className="question-para2">{plus}</p>
          </div>
          <div>
            <button onClick={plusHandler}>{sign}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
