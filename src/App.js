import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      turn: "X"
    }
  }

  userClick = (index, turn) => {
    const { squares } = this.state
    squares[index] = turn
    if (turn === "X") {
      this.setState({ squares: squares, turn: "O"})
    } else {
      this.setState({ squares: squares, turn: "X"})
    }
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
        { this.state.squares.map((value, index) => {
            return (
              <Square 
                value={ value }
                key={ index }
                index={ index }
                userClick={ this.userClick }
                turn = { this.state.turn }
              />
            )
        })}
        </div>
      </>
    )
  }
}
export default App
