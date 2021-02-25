import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    // alert('clicked')
    this.props.userClick(this.props.index, this.props.turn)
  }

  render(){
    return(
      <>
        <div className="square" onClick={ this.handleClick }>{ this.props.value }</div>
      </>
    )
  }
}
export default Square
