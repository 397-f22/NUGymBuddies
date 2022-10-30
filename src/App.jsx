import './App.css';
import NavBar from './components/NavBar';
import GymCard from './components/GymCard';
import Datepicker from './components/Datepicker';
import Gyms from './Gyms';
import {useState,useEffect} from 'react';  

const App = () => {
  const [day,setDay] = useState(null);
  useEffect(()=>{
    const start = Date.now();
    const today = new Date(start);
    // console.log();
    setDay(today.toDateString().slice(0,3))

  },[])
  if(day!=null){
    return (
      <div className="App">
        <div className="App-nav">
          <NavBar />
          <div className="text">
            <h3>Fancy a workout?</h3>
          </div>
          <div className="date-picker">
          <Datepicker setDay={setDay}/>
          </div>
          {Gyms.map(gym => (
            <div className='card-container'>
            <GymCard name={gym.name} location={gym.location} popular_times={gym.popular_times} date={day} max_cap={gym.max_cap}/>
            </div>
          ))}
        </div>
      </div>
    );
  


  }
};

export default App;
