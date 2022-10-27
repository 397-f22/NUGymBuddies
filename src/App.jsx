import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import GymCard from './components/GymCard';

const gyms = {
  
      "name": "Henry Crown Sports Pavilion",
      "location": "2311 Campus Dr, Evanston, IL 60208",
      "opens": "6",
      "closes": "23",
      "popular_times": {"Monday":
                          ["0","0","0","0","0",
                        "0%","5%","10%","20%","30%",
                        "20%","25%","30%","10%","5%",
                        "35%","40%","45%","50%","60%",
                        "45%","10%","5%"],
                      "Tuesday":["0","0","0","0","0",
                          "0%","5%","10%","20%","30%",
                          "20%","25%","30%","10%","5%",
                          "35%","40%","45%","50%","60%",
                          "45%","10%","5%"]},
      "id": "randomlyGeneratedId",
      "max_cap": "250"
  
}
import Chart from './components/Chart';


const App = () => {
  console.log(gyms.gyms)

  return (
    <div className="App">
      <div className="App-nav">
        <NavBar />
<<<<<<< HEAD
        <Chart></Chart>
=======
        <GymCard name={gyms.name} location={gyms.location} popular_times={gyms.popular_times} max_cap={gyms.max_cap}/>
        <GymCard name={gyms.name} location={gyms.location} popular_times={gyms.popular_times} max_cap={gyms.max_cap}/>
>>>>>>> e143285af27f29a5dd119fb277e59a95b8d07b2c
      </div>
    </div>
  );
};

export default App;
