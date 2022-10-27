import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Chart from './components/Chart';


const App = () => {
  

  return (
    <div className="App">
      <div className="App-nav">
        <NavBar />
        <Chart></Chart>
      </div>
    </div>
  );
};

export default App;
