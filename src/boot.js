import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import flower5 from './imgreact/flower2.jpg'
function Boot(props){
    return(
        <div>
            <Button variant="danger">Click me!</Button>
{props.children}
<Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={flower5} />
      <Card.Body>
        <Card.Title>{props.children[2]}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    {props.children[3]}
    {props.children[4]}
    {props.children[5]}
        </div>
    )
}
export default Boot