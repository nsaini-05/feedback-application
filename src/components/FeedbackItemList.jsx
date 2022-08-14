import React from "react"
import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"


function FeedbackItemList({ feedBackList }) {
  return (
    <div className="feedback-list">
      {feedBackList.map((feedBack) => (
        <FeedbackItem
          data = {feedBack}
          key={feedBack.id}
        ></FeedbackItem>
      ))}
    </div>
  )
}

FeedbackItemList.propTypes = {
  feedBackList : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      text : PropTypes.string.isRequired,
      rating : PropTypes.number.isRequired
    })
  )
}


export default FeedbackItemList
