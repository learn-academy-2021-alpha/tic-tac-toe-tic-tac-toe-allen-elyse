import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      turn: "X",
      winner: [""]
    }
  }


//check if square index is an empty string
//if empty string - change to symbol of who's turn it is

  userClick = (index, turn) => {
    const { squares } = this.state
    if(!squares[index] && turn === 'X'){
      squares[index] = 'X'
      this.setState({ squares: squares, turn: 'O'})
    } else if (!squares[index] && turn === 'O'){
      squares[index] = 'O'
      this.setState({ squares: squares, turn: 'X'})
    }
  }
    // if(!(squares[index])){
    //   squares[index] = turn
    // }else if (turn === "X") {
    //   this.setState({ squares: squares, turn: "O"})
    // } else {
    //   this.setState({ squares: squares, turn: "X"})
    // }

    //create a function to determine winner
    //check using map or forEach to check series of index for all 'X' or all 'O'
    //if function comes back true -- end game and alert results

//0,1,2
//3,4,5
//6,7,8

//optional winners:
//rows:[0,1,2],[3,4,5],[6,7,8]
//vertical:[0,3,6],[1,4,7],[2,5,8],
//horizontally:[0,4,8],[2,4,6]

// checkWinner = () => {
//   const { squares } = this.state
//   if(squares[0] === squares[1] && squares[2]){
//     return `${squares[0]} is the winner!`
//   }
// }

checkWinner = () => {
  const { squares } = this.state
  if(squares[0] === squares[1] && squares[2]){
    return `${squares[0]} is the winner!`
  }
}

  render(){
    console.log('checkWinner:',this.checkWinner(this.state.index))
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
                checkWinner = { this.checkWinner }
              />
            )
        })}
        </div>
      </>
    )
  }
}
export default App
