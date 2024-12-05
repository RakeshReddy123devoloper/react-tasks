// import React,{Component} from 'react';
// class Notification extends Component{
// render(props){
//     return(
// <div>
//     <h1>notification card{this.props.type}</h1>
// </div>
//     )
// }
// }
// export default Notification



// import React from "react";
// function Notification(props){
//     return(
//         <div>
// {props.children}
//         </div>
//     )

// }
// export default Notification
// it is parent to child in functional compponent so used props.children

// import Button from 'react-bootstrap/Button';



import Button from 'react-bootstrap/Button';
import React from "react";
function Notification(props){
    return(
        <div>
         <Button variant='success'>{props.children}</Button>
            <button>click me</button>     
            {props.children[1]}
    
        </div>
    )
}
export default Notification

