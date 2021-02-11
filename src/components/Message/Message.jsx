import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {
  return <div></div>
}

Message.defaultProps = {
  list: [],
}

Message.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
}

export default Message
