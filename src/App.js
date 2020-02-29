import React from 'react';
import { Header } from "grommet";
import City from './City';
import './App.css';

function App() {
  return (
    <div>
      <Header background="brand" pad="large" />
      <City size={5}/>
    </div>
  );
}

export default App;
