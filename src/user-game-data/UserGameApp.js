import React, { Component } from 'react';
import logo from './../logo.svg';
import CreateNewUserForm from './CreateNewUserForm'
import TogglButton from './TogglButton'
import UserList from './UserList'
import './../App.css';

class UserGameApp extends Component {
  
  state = {
  	"users": [
      {
      	"name": "Diego",
        "surname": "Milito",
        "username": "dmilito",
        "gamesPlayed": 7
      },
      {
      	"name": "Andre",
        "surname": "Gomez",
        "username": "agomez",
        "gamesPlayed": 7
      },
      {
      	"name": "Xavi",
        "surname": "Hernandez",
        "username": "xhernandez",
        "gamesPlayed": 3
      },
    ],
    "showGamesPlayed": true,
    "alert": ""
  }

  handleCreateNewUser = (user) => {
    let usernameExists = this.state.users.filter(
      userItem => userItem.username === user.username).length > 0
  	if(usernameExists) {
    	this.setState({
       		"alert": `The user with the nickname ${user.username} already exists` 
       	})
    } else {
		user.gamesPlayed = 0
		this.setState((currentState) =>{
          return {
			"alert": "Success",
			"users": [...currentState.users, user]
          }
         })
	}
  }
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<CreateNewUserForm
			handleCreateNewUser={this.handleCreateNewUser}
			alert={this.state.alert}/>
		<TogglButton
			handleToggl={this.togglShowHideUserGamesPlayed}
			onText="Hide the number of games played"
			offText="Show the number of games played"
			toggl={this.state.showGamesPlayed}/>
		<UserList
			users={this.state.users}
			showGamesPlayed={this.state.showGamesPlayed}/>
      </div>
    );
  }
    
  togglShowHideUserGamesPlayed = () => {
  	this.setState((currentState) => {
    	return {"showGamesPlayed": !currentState.showGamesPlayed}
    })
  }
}

export default UserGameApp;
