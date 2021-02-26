import React, { Component } from 'react'
import Square from './components/Square'
import Turn from './components/Turn'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      turn: undefined,
      //turn: "X",
      winner: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
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
  // for of loop to iterate through array of winning conditions
  // we will check if the squares based on the winning condition are the same

    let winningSymbol = ""

  // map to run through each winning condition
  // map will return an array of equal length to this.state.winner
  // the values within the array will be true or false
  // we will check if there is a true within the array
    let winnerResult =  this.state.winner.map(array => {
    // first iteration, array = [0, 1, 2]
    // array[0] -> first element of the winning condition -> 0
    // array[1] -> second element of the winning condition -> 1
    // array[2] -> third element of the winning condition -> 2
      if (squares[array[0]] === squares[array[1]] && squares[array[1]] === squares[array[2]] && squares[array[0]]) {
        // return array.filter(value => {
        //   this.setState({ gameOver: true })
        // })
        winningSymbol = squares[array[0]]
        return true
      // } else if (array === false) {
      //   tieSymbol = squares
        // alert('Everyone is a winner')
      } else {
        return false
      }
    // alert(squares)
    // console.log(squares)
  }).filter(value => {
    return value === true
    // if (value === true) {
    //   this.setState({ gameOver: true})
    // }
  })
  // add forEach??

  console.log("winnerResult:", winnerResult)
  if (winnerResult.includes(true)) {
    alert(`${ winningSymbol } is the winner!`)
    return winnerResult[0]
  // } else if(squares === 8 && false){
  //   alert("Everyone is a winner!")
  }

  // this.setState({ gameOver: winnerResult })

  //add filter to funtion - returning only true or false and changing our game over state to true if true value.
  //change state of gameOver from false to true when checkWinner comes back with ANY true value using filter.
  //
  //once winner is found - prompt onclick to use stop method to no longer allow clicking.

}

  // create a function that checks if there is a tie
  checkTie = () => {
    const { squares } = this.state

    // Check if there is a value inside each square element
    // Filter will check which elements are empty
    // Then we will check that the array length is 9, which means there are no empty elements
    // Therefore, we have a tie
    const arrayCheck = squares.filter(value => {
      return value !== ''
    })

    // return arrayCheck.length
    if (arrayCheck.length >= 9) {
      alert('Everyone is a winner!')
    }
  }

  // announceWinner = (winnerResult) => {
  //   if (winnerResult === true) {
  //     alert(`${this.squares} has won!`)
  //   }
  // }

  refreshPage = () => {
    window.location.reload()
  }

  chooseTurn = (symbol) => {
    if(symbol === "X"){
      this.setState({ turn: "X" })
    }else if(symbol === "O")
      this.setState({ turn: "O" })
  }

  render(){
    console.log('checkWinner:',this.checkWinner(this.state.index))
    console.log('checkTie:', this.checkTie())
    return(
      <>
        <h1 className="background  coloring">Tic Tac Toe</h1>
        <div className="coloring">
          <Turn
              chooseTurn={ this.chooseTurn}
              turn= { this.state.turn }/>
        </div>
        <div className="gameboard coloring">
        { this.state.squares.map((value, index) => {
            return (
              <Square
                value={ value }
                key={ index }
                index={ index }
                userClick={ this.userClick }
                turn = { this.state.turn }
                checkWinner = { this.checkWinner }
                checkTie = {this.checkTie }
              />
            )
        })}
        </div>
        <div className="coloring">
          <p>It is { this.state.turn }'s turn</p>
        </div>
        <div className="coloring padding">
          <button className="coloring" onClick= { this.refreshPage }>Restart Game</button>
        </div>
        <footer className="coloring">~Brought to you by Allen and Elyse~</footer>
      </>
    )
  }
}
export default App
