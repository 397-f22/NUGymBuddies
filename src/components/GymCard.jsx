import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Chart from './Chart';
import "./GymCard.css";
const GymCard = ({name,location,popular_times,max_cap}) => {
  return (
    <div className='card-wrapper'>
    <Card style={{  }}>
      <Card.Img variant="top" />
      <Card.Body style={{fontSize: 10}}>
        <div className="card-info">
        <Card.Title style={{fontWeight: "bolder"}}>{name}</Card.Title>
        <Card.Text style={{fontSize: 8}}>
          {location}
        </Card.Text>
        <Card.Text style={{fontSize: 6}}>
          Max capacity: {max_cap}
        </Card.Text>
        </div>
        {/* <div className='chart-wrapper'> */}
        <Chart popular_times={popular_times}></Chart>

        {/* </div> */}
        <Button style={{fontSize: 8}} variant="primary">Going</Button>
      </Card.Body>
    </Card>


    </div>
  );
}

export default GymCard;
  