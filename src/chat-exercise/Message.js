import React from 'react';
import './ChatApp.css';

const Message = (props) => (
  <li key={props.key} className={props.className}>
  	<p>{`${props.value.username}: ${props.value.text}`}</p>
  </li>
)

export default Message;
