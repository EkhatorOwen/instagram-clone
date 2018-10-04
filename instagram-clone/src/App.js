import React, { Component } from 'react';
import ToggleRenderProps from './ToggleRenderProps'
import ToggleRPC from './ToggleRPC'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Intagram-clone app</h1>
        </header>

        <ToggleRPC  >
        {({on, toggle})=>(
          <div>
            {on && <h1>Show me</h1>}
            <button onClick={toggle}>{on ? 'hide':'show'}</button>
          </div>
        )}
        </ToggleRPC> 
       
          <p className="App-intro">
            Work in progress, stay tuned...
          </p>
      </div>
    );
  }
}

export default App;
