import React from 'react';
import './ChatApp.css';
import PropTypes from 'prop-types'

const Message = (props) => (
  <li key={props.key} className={props.className}>
  	<p>{`${props.value.username}: ${props.value.text}`}</p>
  </li>
)

Message.PropTypes = {
	key: PropTypes.number.isRequired,
  	className: PropTypes.string.isRequired,
	value: PropTypes.object.isRequired
}

export default Message;
