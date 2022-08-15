import React from "react"
import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"
function FeedbackForm() {
  const [text, setText] = useState("")
  const [isDisabled , setIsDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const handleTextChange = (e) => {
    if(text === '') {
        setIsDisabled(true)
        setMessage(null)
    }else if(text !== '' && text.length  <= 10){
        setIsDisabled(true)
        setMessage("Text must be 10 characters")
    }else{
        setMessage(null)
        setIsDisabled(false)
    }
    setText(e.target.value) 
    e.preventDefault() 
  }

  return (
    <Card reverse={false}>
      <form>
        <h2> How you feel about your service ?? </h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" disabled = {isDisabled} version = "primary">Send</Button>
        </div>
        {message && < div className = "message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
