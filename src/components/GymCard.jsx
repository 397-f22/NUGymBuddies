import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Chart from './Chart';
import "./GymCard.css";
const GymCard = ({name,location,popular_times,max_cap}) => {
  return (
    <div className='card-wrapper'>
    <Card style={{  }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Address: {location}
        </Card.Text>
        
        <Card.Text>
          Max capacity: {max_cap}
        </Card.Text>
        {/* <div className='chart-wrapper'> */}
        <Chart></Chart>

        {/* </div> */}
        <Button variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>


    </div>
  );
}

export default GymCard;
  