import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    if (this.props.checkTie() >= 9) {
      // alert('Everyone is a winner!')
      this.props.checkTie()
    // If statement that checks if false, then run these commands
    } else if (!this.props.checkWinner()) {
      // alert('clicked')
      this.props.userClick(this.props.index, this.props.turn)
      // this.props.checkWinner(this.props.index)
    }
  }

  render(){
    return(
      <>
        <div className="square background" onClick={ this.handleClick }>{ this.props.value }</div>
      </>
    )
  }
}
export default Square
