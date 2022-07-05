import React, { useEffect, useState } from "react";
import "./Stopwatch.css";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timeON, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timeON) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeON]);
  const startHandler = () => {
    setTimeOn(true);
  };
  const stopHandler = () => {
    setTimeOn(false);
  };
  const resumeHandler = () => {
    setTimeOn(true);
  };
  const resetHandler = () => {
    setTime(0);
    setTimeOn(false)
  };
  return (
    <>
      <div className="stopwatch-container">
        <div className="time-container">
          <div>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
          <div className="btn-container">
            <button onClick={startHandler} className="start">
              Start
            </button>
            <button onClick={stopHandler} className="stop">
              Stop
            </button>
            <button onClick={resumeHandler} className="resume">
              Resume
            </button>
            <button onClick={resetHandler} className="reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
