import React from "react";
import "./MyCard.css";
import Data from "./Data.json"

const MyCard = () => {
  return (
    <>
    {Data.map((item)=>{
      return(
        <div className="card" key={item.id}>
        <div className="card-img">
          <img src={item.image} alt="Fashion" width={"300px"} />
          <h1 className="heading">{item.title}</h1>
          <p className="para">{item.name}</p>
        </div>
      </div>
      )
    })}
      
    </>
  );
};

export default MyCard;
