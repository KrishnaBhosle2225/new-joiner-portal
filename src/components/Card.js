import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";


function Card(props) {
  return (
    <div className="card-container">
      <Link to={`/${props.title}`} target="__blank" className="item_link">
        
        <h2 className="title item_bg">
          {props.title}
        </h2>
        
      </Link>


    </div>
  );
}

export default Card;
