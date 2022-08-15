import React from 'react'
import PropTypes from "prop-types"
function FeedbackStats({feedBackList}) {
let average = feedBackList.reduce((acc ,f) => acc + f.rating ,0) / feedBackList.length;
average = average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
        <h4>{feedBackList.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes ={
    feedBackList : PropTypes.array.isRequired
}

export default FeedbackStats