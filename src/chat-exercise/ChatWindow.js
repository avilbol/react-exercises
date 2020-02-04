import React from 'react';
import './ChatApp.css';
import MessageList from './MessageList'
import AddMessageForm from './AddMessageForm'

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

export default ChatWindow;
