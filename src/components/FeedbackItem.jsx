import React from "react"
import Card from "./shared/Card.jsx"
import { FaTimes } from "react-icons/fa"
import PropTypes from "prop-types"

function FeedbackItem({ data , handleDelete}) {
  
  return (
    <Card>
      <div className="num-display">{data.rating}</div>
      <button className="close" onClick={()=>handleDelete(data.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-dispaly">{data.text}</div>
    </Card>
  )
}

export default FeedbackItem
