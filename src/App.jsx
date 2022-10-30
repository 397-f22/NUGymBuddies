import './App.css';
import NavBar from './components/NavBar';
import GymCard from './components/GymCard';
import Calendar from './components/Calendar';
import Gyms from './Gyms';
import TimePicker from './components/TimePicker';

const App = () => {
  return (
    <div className="App">
      <div className="App-nav">
        <NavBar />
        <div className="text">
          <h3>Fancy a workout?</h3>
        </div>
        <div className="date-picker">
        <Calendar/>
        </div>
        {Gyms.map(gym => (
          <div className='card-container'>
          <GymCard name={gym.name} location={gym.location} popular_times={gym.popular_times} max_cap={gym.max_cap}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
