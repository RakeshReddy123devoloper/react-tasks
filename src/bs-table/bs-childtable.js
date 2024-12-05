import React from "react";
import Table from 'react-bootstrap/Table';
function Table1(props){
    return (
        <div>
 <Table striped bordered hover style={{border:"2px solid red"}}>
      <thead>
        <tr>
          
          <th>id</th>
          <th>title</th>
          <th>price</th>
          <th>desc</th>
          <th>rate</th>
          <th>count</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.title}</td>
          <td>{props.price}</td>
          <td>{props.desc}</td>
          <td>{props.rate}</td>
          <td>{props.count}</td>
          <td><img style={{height:"100x", width:"100px"}} src={props.image} alt="hello"/></td>
        </tr>
        <tr>
        <td>{props.id}</td>
          <td>{props.title}</td>
          <td>{props.price}</td>
          <td>{props.desc}</td>
          <td>{props.rate}</td>
          <td>{props.count}</td>
          <td><img style={{height:"100px", width:"100px"}} src={props.image} alt="hello"/></td>
        </tr>
        <tr>
        <td>{props.id}</td>
          <td>{props.title}</td>
          <td>{props.price}</td>
          <td>{props.desc}</td>
          <td>{props.rate}</td>
          <td>{props.count}</td>
          <td><img style={{height:"100px", width:"100px"}} src={props.image} alt="hello"/></td>
        </tr>
      </tbody>
    </Table>

        </div>
    )
}
export default Table1