import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    // If statement that checks if false, then run these commands
    if (!this.props.checkWinner()) {
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
