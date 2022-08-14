import React from "react"
import PropTypes from "prop-types"

function Header({ text }) {
  const headerStyles = {
    color: "blue",
    backgroundColor: "black",
  }

  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: "Feedback Application",
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header
