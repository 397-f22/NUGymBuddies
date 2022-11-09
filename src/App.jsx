import './App.css';
import NavBar from './components/NavBar';
import GymCard from './components/GymCard';
import Calendar from './components/Calendar';
import Gyms from './Gyms';
import {useState,useEffect} from 'react';  
import TimePicker from './components/TimePicker';
import { Dropdown } from 'bootstrap';
import Slider from '@mui/material/Slider';
import Friends from './components/Friends';

const App = () => {
  const [data, error] = useDbData('/');
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;
  
  const [day,setDay] = useState(null);
  function valuetext(value) {
    return `${value} %`;
  }
  
  useEffect(()=>{
    const start = Date.now();
    const today = new Date(start);
    //console.log(today.toDateString());
    setDay(today.toDateString().slice(0,3))

  },[])
  const [time, setTime] = useState([]);
  const [threshold,setThreshold] = useState(30)
  const handleChange = (event, newValue) => {
    setThreshold(newValue);
    console.log(threshold)
  };

  if(day!=null){
    return (
      <div className="App">
        <div className="App-nav">
          <NavBar />
          <div className="text">
            <h3>Fancy a workout?</h3>
          </div>
          <div className="date-picker">   
            <Calendar setDay={setDay}/>
          </div>
          <div className="grid">
            <div className="gridHalf1">
              <div className="capacityDiv">
                <h4>Capacity</h4>
                <Slider defaultValue={0} aria-label="Threshold" valueLabelDisplay="auto" step={5} getAriaValueText={valuetext} onChange={handleChange} onChangeCommitted={handleChange} min={0} max={100}/>
              </div>
              <div className="legendDiv">
                <h4>Legend</h4>
                <h5>🟦 = Current Occupancy | 🟩 = Under Selected Capacity | 🟥 = Over Selected Capacity</h5>
              </div>
              {Gyms.map(gym => (
                <div className='card-container'>
                  <GymCard name={gym.name} location={gym.location} popular_times={gym.popular_times} date={day} time={time}max_cap={gym.max_cap} threshold={threshold}/>
                </div>
              ))}
            </div>
            <div className="gridHalf2">
              <Friends />
              <TimePicker setTime={setTime}/>
            </div>
          </div>
        </div>
      </div>
    );
  


  }
};

export default App;
