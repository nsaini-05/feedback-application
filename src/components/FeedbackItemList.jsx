import React from "react"
import FeedbackItem from "./FeedbackItem"

function FeedbackItemList({ feedBackList }) {
  return (
    <div className="feedback-list">
      {feedBackList.map((feedBack) => (
        <FeedbackItem
          text={feedBack.text}
          rating={feedBack.rating}
          key={feedBack.id}
        ></FeedbackItem>
      ))}
    </div>
  )
}

export default FeedbackItemList
