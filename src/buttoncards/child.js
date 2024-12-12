import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Child(props){
    return(
<div>

   
    
<Card style={{display:"flex",marginLeft:"20vw", width:"40vw"}}>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body style={{height:"150px",overflow:"scroll"}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.desc}
        </Card.Text>
        <Button variant="primary">{props.cat}</Button>
      </Card.Body>
    </Card>

</div>
    )
}
export default Child;