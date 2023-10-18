import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }} className='m-auto mt-2 flex justify-content-center align align-items-center'>
     <Card.Img variant="top" src={props.links} />
      
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="primary">{props.action}</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;