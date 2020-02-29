import React from 'react';

import { Header } from "grommet";
import City from './City';
import ControlPanel from './ControlPanel';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header background="brand" pad="large" />
        <City size={5}/>
        <ControlPanel className="App__ControlPanel"/> 
      </div>
    );
  }
}
