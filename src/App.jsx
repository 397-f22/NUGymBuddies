import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import DatePicker from './components/DatePicker';

const App = () => {
  

  return (
    <div className="App">
      <div className="App-nav">
        <NavBar />
        <DatePicker />
      </div>
    </div>
  );
};

export default App;
