import React from "react"

function EduDisplay(props) {
  console.log(props)

  return (
    <div>
      <h2>{props.item.school}</h2>
      <h2>
        {props.item.from} - {props.item.to}
      </h2>
      <h2>{props.item.description}</h2>
    </div>
  )
}

export default EduDisplay