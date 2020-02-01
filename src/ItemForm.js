import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ItemForm extends Component {
  
  state = {
  	"value": ""
  }

  onSubmit = event => {
  	event.preventDefault()
    this.props.onSubmit(this.state.value)
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
        	type="text"
        	placeholder="Enter New Item"
        	value={this.state.value}
        	onChange={this.handleChange}/>
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    )
  }
}

ItemForm.propTypes = {
  	onSubmit: PropTypes.func.isRequired()
}

export default ItemForm;
