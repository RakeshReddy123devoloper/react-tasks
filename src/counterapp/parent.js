import React,{ Component } from "react"
class Counter extends Component{
    constructor(props){
        super()
        this.state={count:2}
}
handleevent=()=>{
    this.setState({count:this.state.count+1})

}
handleevent1=()=>{
    this.setState({count:this.state.count-1})
}
handleevent2=()=>{
    this.setState({count:this.state.count+2})
}
handleevent3=()=>{
    this.setState({count:this.state.count-2})
}
render(){
    return(
        <div style={{textAlign:"center"}}>
<h1 style={{textAlign:"center",marginTop:"20vh"}}>counter task 7</h1>
           <h1> <button onClick={this.handleevent}>+</button></h1>
           <h1> <button onClick={this.handleevent1}>-</button></h1>
           <h1>  {this.state.count}</h1>
           <h1> <button onClick={this.handleevent2}>+2</button></h1>
           <h1> <button onClick={this.handleevent3}>-2</button></h1>
        </div>
    )
}
}
export default Counter



// toggle button
// import React, { Component } from "react";
// class Parent extends Component {
//   constructor() {
//     super();
//     this.state = { ison: true };
//   }
//   handleevent = () => {
//     this.setState({ ison: !this.state.ison });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleevent} style={this.state.ison?clr.obj1:clr1.ob2}>
//           {this.state.ison?<h1>switchoff</h1>:<h1>switchon</h1>}
//         </button>

//         <h1 style={this.state.ison?clr.obj1:clr1.ob2}>
//           {this.state.ison?<h1>turnedon</h1>:<h1>turnedoff</h1>}
//         </h1>
//       </div>
//     );
//   }
// }
// export default Parent;

// const clr={
//     obj1:{
//         color:"green"
//     }
// }
// const clr1={
//     ob2:{
//         color:"red"
//     }
// }

// import React from "react";
// class Parent extends React.Component {
//   constructor() {
//     super();
//     this.state = { type: this.state };
//   }
//   handle = (event) => {
//     event.preventDefault();
//     this.setState({ type: event.taget.value });
//   };

//   render() {
//     return (
//       <div>
//         <form onsubmit={this.handle}>
//           <input id="name" type="text" />
//           <input type="submit" />
//         </form>
//         {/* <h1 >{this.state.text}</h1> */}
//       </div>
//     );
//   }
// }
// export default Parent;


// import React from "react";

// class Parent extends React.Component {
//   constructor() {
//     super();
//     this.state = { type: '' };
//   }

//   handle = (event) => {
//     event.preventDefault();
//     const inputText = event.target.name.value; // Get value from input field by name
//     this.setState({ type: inputText });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handle}>
//           <input id="name" name="name" type="text" />
//           <input type="submit" value="Submit" />
//         </form>
//         <h1>{this.state.type}</h1>
//       </div>
//     );
//   }
// }

// export default Parent;

