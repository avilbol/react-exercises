import React, { Component } from 'react';


class ItemForm extends Component {
  
  state = {
  	"value": ""
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };
  
  render() {
    return (
      <form onSubmit={this.props.onSubmit(this.state.value)}>
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

export default ItemForm;
