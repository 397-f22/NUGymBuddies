import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const GymCard = ({name,location,popular_times,max_cap}) => {
  return (
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
        <Button variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>
  );
}

export default GymCard;
  