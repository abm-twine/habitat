import React from 'react';
import ControlPanel from './ControlPanel';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ControlPanel className="App__ControlPanel"/> 
      </div>
    );
  }
}

export default App;
