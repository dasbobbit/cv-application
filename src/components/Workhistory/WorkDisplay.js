import React from "react"
import "../../styles/Workhistory.css";

function WorkDisplay(props) {
  console.log(props)

  return (
    <div className="work-display-grid">
      <h2 className="display-position">{props.item.position}</h2>
      <h2 className="display-dates">
        {props.item.from} - {props.item.to}
      </h2>
      <h2 className="display-company">{props.item.company}</h2>
      <h3 className="display-maintasks">{props.item.maintasks}</h3>
      <button type="submit" onClick={() => props.handleRemove(props.item.id)}>Remove</button>
    </div>
  )
}

export default WorkDisplay