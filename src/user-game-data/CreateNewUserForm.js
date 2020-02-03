import React, { Component } from 'react';

class CreateNewUserForm extends Component {
  
  isInvalidUser = () => !this.state.name 
	|| !this.state.surname || !this.state.username

  state = {
  	"name": "", "surname": "", "username": ""
  }

  onSubmit = (e) => {
    e.preventDefault()
  	this.props.handleCreateNewUser({
    	"name": this.state.name,
     	"surname": this.state.surname,
        "username": this.state.username
    })
  }

  handleChange = (e) => {
  	this.setState({
      [e.target.name]: e.target.value
    })
  }

  alertLayout = () => (
    <p>{this.props.alert}</p>
  ) 
  
  render() {
    return (
      <div className="Container">
       {this.props.alert && this.alertLayout()}
        <div>
          <form onSubmit={this.onSubmit}>
              <label>
			  Name:
			  <input 
                  type="text" 
                  onChange={this.handleChange} 
                  name="name"/>
			  </label>
			  <br/>
			  <label>
			  Surname:
              <input 
                  type="text" 
                  onChange={this.handleChange}
                  name="surname"/>
              </label>
			  <br/>
  			  <label>
              Username:
			  <input 
                  type="text" 
                  onChange={this.handleChange}
                  name="username"/>
              </label>
			  <br/>
              <button 
                  type="submit" 
                  disabled={this.isInvalidUser()}>Add User</button>
          </form>
		</div>
      </div>
    );
  }
}

export default CreateNewUserForm;
