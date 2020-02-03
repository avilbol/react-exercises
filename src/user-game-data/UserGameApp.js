import React, { Component } from 'react';
import logo from './../logo.svg';
import CreateNewUserForm from './CreateNewUserForm'
import TogglButton from './TogglButton'
import './../App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/
const UserList = (props) => {
  	const usersData = props.users.map((user)=>(
    	<li key={user.username}>
           {user.username} played {props.showGamesPlayed ? user.gamesPlayed : 0} games
		</li>
    ))
    return (
    	<ol>
      		{usersData}
      	</ol>
    )
  }


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
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<CreateNewUserForm
			handleCreateNewUser={this.handleCreateNewUser.bind(this)}
			alert={this.state.alert}/>
		<TogglButton
			handleToggl={this.togglShowHideUserGamesPlayed.bind(this)}
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
}

export default UserGameApp;
