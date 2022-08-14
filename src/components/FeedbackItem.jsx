import React from 'react'
import { useState } from 'react'

function FeedbackItem({text,rating}) {
  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-dispaly">{text}</div>
    </div>
  )
}

export default FeedbackItem