import React, { Component } from 'react';

class Move extends Component {
  constructor(props){
    super(props);
    this.state = {x: 0, y: 0 }
  }

  handleMouseMove = (e)=>{
      this.setState({x: e.clientX, y: e.clientY})
  }

  render(){
    const {children} = this.props
    return(
      <div >
      {
        children({
          x: this.state.x,
          y: this.state.y,
          handleMouseMove: this.handleMouseMove
        })
      }
       { /*<p>The current position of the mouse is ({this.state.x},{this.state.y}) </p> */}
      </div>
    )
  }
}

export default  Move