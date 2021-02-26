import React, { Component } from 'react'

class Turn extends Component{

  handleClickX = () => {
    this.props.chooseTurn("X")
  }
  handleClickO = () => {
        this.props.chooseTurn("O")
  }

  render(){
    return(
      <>
      <div>
        { !this.props.turn &&
        <div className="padding">
          <button className="coloring padding" onClick={ this.handleClickX }>Click HERE to choose "X"
          </button>
          <button className="coloring padding"onClick={ this.handleClickO }>Click HERE to choose "O"
          </button>
        </div>
      }  
      </div>
      </>
    )
  }
}
export default Turn



//setstate in app.js
//function will pass to turn js as a prop
//2 buttons with "x" or "o" ---select one changes state.turn to new value.
