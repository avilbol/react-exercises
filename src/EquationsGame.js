import React, { Component } from 'react'

class EquationsGame extends Component {

  state = {
  	"equation": EquationsGame.generateBasicEquation(),
    "numCorrect": 0,
    "numQuestions": 0
  }

  choose = (option) => {
  	let valuesSum = EquationsGame.sumValues(this.state.equation.values)
    let equationSatisfied = valuesSum === this.state.equation.proposedAnswer
    let correctOption = (option && equationSatisfied) 
    	|| (!option && !equationSatisfied)
    
    this.updateGame(correctOption)
  }

  chooseTrue = () => this.choose(true)

  chooseFalse = () => this.choose(false)

  updateGame = correctOption => {
	this.setState((currentState) => ({
		"equation": EquationsGame.generateBasicEquation(),
    	"numCorrect": currentState.numCorrect + (correctOption ? 1 : 0),
    	"numQuestions": currentState.numQuestions + 1
	}))
  }

  static generateBasicEquation() {
    return this.generateEquation({
      "operands": 100,
      "answer": 3
    })
  }

  static generateEquation(limitData) {
	let values = [...Array(3)].map(() => this.generateRandom(limitData.operands))
	let proposedAnswer = this.sumValues(values) 
    	+ this.generateRandom(limitData.answer)
	
	return {
		"values": values,
		"proposedAnswer": proposedAnswer
	}
  }
  
  static sumValues(values) {
    return values.reduce((a,b)=>a+b, 0)
  }

  static generateRandom(limit) {
    return Math.floor(Math.random() * limit)
  }

  render() {
  	return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
        	<p className="text">{`${this.state.equation.values[0]} + 
				${this.state.equation.values[1]} + 
				${this.state.equation.values[2]} = 
				${this.state.equation.proposedAnswer}`}
			</p>
        </div>
        <button onClick={this.chooseTrue}>True</button>
        <button onClick={this.chooseFalse}>False</button>
        <p className="text">Your Score: {this.state.numCorrect}/{this.state.numQuestions}</p>
      </div>
	)
  }
}

export default EquationsGame;
