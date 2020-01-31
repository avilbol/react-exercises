import React, { Component } from 'react';
import logo from './logo.svg';
import MirrorText from './MirrorText'
import './App.css';

class App extends Component {
  
  state = { "textEntered": "" }

  textChangeHandler = (e) => {
  	this.setState({
    	"textEntered": e.target.value
    })
  }

  mirror = (textEntered) => textEntered.split("").reverse().join("")
  
  render() {
    let mirroredText = this.mirror(this.state.textEntered)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" value={this.state.textEntered} onChange={this.textChangeHandler} placeholder="Say Something" />
          <MirrorText mirroredText={mirroredText}/>
        </div>
      </div>
    );
  }
}

export default App;
