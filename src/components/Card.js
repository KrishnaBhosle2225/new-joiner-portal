import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="ag-format-container">
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              {props.title}
            </div>

          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
