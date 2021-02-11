import React from 'react'
import PropTypes from 'prop-types'

function Response(props) {
  return (
    <>
      <div className="message-data align-left">
        <span className="message-data-name">
          <i className="fa fa-circle online material-icons">circle</i>
          {props.data.from.name}
        </span>
        <span className="message-data-time">{props.data.time}</span>
      </div>
      <div className="message my-message">{props.data.text}</div>
    </>
  )
}

Response.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    time: PropTypes.string,
    from: PropTypes.object,
    text: PropTypes.string,
  }),
}

export default Response
