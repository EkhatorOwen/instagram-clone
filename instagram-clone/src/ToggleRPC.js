//togglerenderpropschildren

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
   const { children } = this.props;
   //console.log(children)
    return (
      <div>
        { children({
          on: this.state.on,
          toggle: this.toggleSwitch
        }) }
      </div>
    )
  }
}

