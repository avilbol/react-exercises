import React from 'react';
import logo from './logo.svg';
import ItemForm from './ItemForm'
import ItemList from './ItemList'
import './App.css';

class ModularApp1 extends React.Component {
  state = {
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = newItem => {
    this.setState(oldState => ({
      items: [...oldState.items, newItem],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <ItemForm 
    		onSubmit={this.addItem}/>
        <ItemList 
			items={this.state.items}
			onDeleteLastItem={this.deleteLastItem}/>
      </div>
    );
  }
}

export default ModularApp1;
