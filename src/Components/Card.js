import React from "react";
import MyCard from "./MyCard";
import "./MyCard.css";
const Card = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="nav-item">FashStore</h1>
      </div>
      <section className="container">
        <MyCard />
      </section>
      <div className="footer">
        <h3 className="foot-item">@FashStore</h3>
      </div>
    </>
  );
};

export default Card;
