import React from "react";
import "../../styles/Education.css";

function EduDisplay(props) {
  console.log(props);

  return (
    <div className="display-grid">
      <h2 className="display-school">{props.item.school}</h2>
      <h2 className="display-dates">{props.item.from} - {props.item.to}</h2>

      <h3 className="display-description">{props.item.description}</h3>
      <button type="submit" onClick={() => props.handleRemove(props.item.id)}>
        Remove
      </button>
    </div>
  );
}

export default EduDisplay;
