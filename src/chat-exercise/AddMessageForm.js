import React, { Component } from 'react';
import './ChatApp.css';
import PropTypes from 'prop-types'

class AddMessageForm extends Component {
  
  state = {
    text: ""
  }

  isDisabled = () => !this.state.text

  handleChange = (e) => {
    this.setState({"text": e.target.value})
  }

  onSubmit = (e) => {
  	e.preventDefault()
    this.props.onAddMessage({
    	"text": this.state.text,
      	"username": this.props.username
    })
  }

  render() {
    return (
      <div>
      	<form className="input-group" onSubmit={this.onSubmit}>
      		<input 
    			type="text" 
    			className="form-control" 
    			placeholder="Enter your message..."
    			onChange={this.handleChange} />
            <div className="input-group-append">
              <button type="submit" className="btn submit-button" disabled={this.isDisabled()}>
              SEND
              </button>
      		</div>
      	</form>
      </div>
    );
  }
}

AddMessageForm.propTypes = {
	onAddMessage: PropTypes.func.isRequired
}

export default AddMessageForm;
