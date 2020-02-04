import React, { Component } from 'react';
import logo from './logo.svg';
import ChatWindow from './ChatWindow'
import './ChatApp.css';

class ChatApp extends Component {
	
	state = { messages: [] }

	onAddMessage = (message) => {
      this.setState((currentState) => ({
          messages: [...currentState.messages, message]
      }))
    }
  
	render() {
      	const { messages } = this.state
		const { onAddMessage } = this
    	return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">ReactND - Coding Practice</h1>
            </header>
            <div className="container">
              <ChatWindow 
      			sender="Amy"
      			messages={messages}
      			onAddMessage={onAddMessage} />
              <ChatWindow 
				sender="John" 
				messages={messages}
				onAddMessage={onAddMessage} />
            </div>
          </div>
        )
    }
}

export default ChatApp;
