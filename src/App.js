import Header from "./components/Header"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackItemList from "./components/FeedbackItemList"

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData)
  return (
    <>
      <Header text={"Feedback"} />
      <div className="container">
        <FeedbackItemList feedBackList={feedbackData} />
      </div>
    </>
  )
}

export default App
