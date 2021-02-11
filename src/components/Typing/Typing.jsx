import React from 'react'
import PropTypes from 'prop-types'

function Typing(props) {
  return (
    <>
      <div className="message-data align-left">
        <span className="message-data-name">
          <i className="fa fa-circle online material-icons">circle</i>
          {props.data.from.name}
        </span>
        <span className="message-data-time">{props.data.time}</span>
      </div>
      <div className="typing align-left material-icons">
        <span className="first">circle</span>
        <span className="second">circle</span>
        <span className="third">circle</span>
      </div>
    </>
  )
}

Typing.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    time: PropTypes.string,
    from: PropTypes.object,
  }),
}

export default Typing
