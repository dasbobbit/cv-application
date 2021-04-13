import React from "react"
import "../../App.css";

function EduDisplay(props) {
  console.log(props)

  return (
    <div>
      <h2>{props.item.school}</h2>
      <h2>
        {props.item.from} - {props.item.to}
      </h2>
      <h2>{props.item.description}</h2>
      <button type="submit" onClick={() => props.handleRemove(props.item.id)}>Remove</button>
    </div>
  )
}

export default EduDisplay