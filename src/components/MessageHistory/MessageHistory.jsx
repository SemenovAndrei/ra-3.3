import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message/Message'
import Response from '../Response/Response'
import Typing from '../Typing/Typing'

function MessageHistory(props) {
  const messages = props.list.map((o) => {
    if (o.type === 'response') {
      return (
        <li className="clearfix" key={o.id}>
          <Message data={o} />
        </li>
      )
    }

    if (o.type === 'message') {
      return (
        <li className="" key={o.id}>
          <Response data={o} />
        </li>
      )
    }

    if (o.type === 'typing') {
      return (
        <li className="" key={o.id}>
          <Typing data={o} />
        </li>
      )
    }

    return null
  })

  return messages.length !== 0 && <ul className="MessageHistory chat-data">{messages}</ul>
}

MessageHistory.defaultProps = {
  list: [],
}

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
}

export default MessageHistory
