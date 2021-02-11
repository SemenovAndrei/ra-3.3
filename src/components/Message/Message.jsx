import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {
  return (
    <>
      <div className="message-data align-right">
        <span className="message-data-time">{props.data.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{props.data.from.name}</span>
        <i className="fa fa-circle me material-icons">circle</i>
      </div>
      <div className="message other-message float-right">{props.data.text}</div>
    </>
  )
}

Message.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    time: PropTypes.string,
    from: PropTypes.object,
    text: PropTypes.string,
  }),
}

export default Message
