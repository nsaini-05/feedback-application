import Header from "./components/Header"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackItemList from "./components/FeedbackItemList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedbackData(feedbackData.filter((f) => f.id !== id))
    }
  }
  return (
    <>
      <Header text={"Feedback"} />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedBackList={feedbackData} />
        <FeedbackItemList
          feedBackList={feedbackData}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  )
}

export default App
