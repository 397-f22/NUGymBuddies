import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Chart from './Chart';
import "./GymCard.css";
const GymCard = ({room,name,location,popular_times,max_cap, date, time, threshold}) => {
 
  return (
    <div className='card-wrapper'>
    <Card style={{  }}>
      <Card.Img variant="top" />
      <Card.Body style={{fontSize: 10}}>
        <div className="card-info">
        <Card.Title style={{fontWeight: "bolder"}}>{name}:{room} room</Card.Title>
        <Card.Text style={{fontSize: 8}}>
          {location}
        </Card.Text>
        <Card.Text style={{fontSize: 6}}>
          Max capacity: {max_cap}
        </Card.Text>
        </div>
        <div className='chart-wrapper'>
        <Chart data-testid="chart" room={room} popular_times={popular_times} date={date} time={time} threshold={threshold}></Chart>
        </div>
        {/* <Button id="goingButton" className="goingButton" style={{fontSize: 8}}>Going</Button> */}
      </Card.Body>
    </Card>


    </div>
  );
}

export default GymCard;
  