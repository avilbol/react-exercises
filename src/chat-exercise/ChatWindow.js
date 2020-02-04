import React from 'react';
import './ChatApp.css';
import MessageList from './MessageList'
import AddMessageForm from './AddMessageForm'
import PropTypes from 'prop-types'

const ChatWindow = props => (
	<div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{props.sender}</div>
      <MessageList 
		messages={props.messages} 
		sender={props.sender}/>
      <AddMessageForm 
		username={props.sender} 
		onAddMessage={props.onAddMessage} />
    </div>
)

ChatWindow.PropTypes = {
	"sender": PropTypes.string.isRequired,
  	"messages": PropTypes.array.isRequired,
  	"onAddMessage": PropTypes.func.isRequired
}

export default ChatWindow;
