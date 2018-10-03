import React, { Component } from 'react'

export default class ToggleRenderProps extends Component {
  state = {
    on: false
  }

  toggleSwitch=()=>{
    this.setState(prevState=>({
      on: !prevState.on
    }))
  }
  
  render() {
   const { render } = this.props;
    return (
      <div>
        { render({
          on: this.state.on,
          toggle: this.toggleSwitch
        }) }
      </div>
    )
  }
}

