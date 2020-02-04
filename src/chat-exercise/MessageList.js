import React from 'react';
import './ChatApp.css';
import Message from './Message'

const MessageList = (props) => (
  <ul className="message-list">
    {props.messages.map((message, index) => 
		(<Message 
         	value={message} 
			key={index}
			className={message.username === props.sender ? 'message sender' : 'message recipient'}/>
		))
	}
  </ul>
)

export default MessageList;
