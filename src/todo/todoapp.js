
// import React,{Component} from 'react';
// class Todo extends Component{
//     constructor(){
//         super();
//         this.state={
//             todo:"",
//             list:""
//         }
//     }
//     handlechange=(event)=>{
// console.log(event.target.value)
// this.setState({todo:event.target.value})
//     }
//     handlesubmit=(e)=>{
//         e.preventDefault()
//         let list=this.state.todo;
//         Map.list((a,b)=>{
//             list.push(a);
//         })
//     this.setState({list:[this.state.todo,this.state.list]})
//     }
    
//     render(){
//         return (
//             <div>
// <form onSubmit={this.handlesubmit}>
//     <input type="text" name="todo" onChange={this.handlechange}/>
//     <input type="submit"/>
// </form>
// <h1>{this.state.list}</h1>


//             </div>
//         )
//     }

// }
// export default Todo;


// import React, { Component } from 'react';

// class Todo extends Component {
//     constructor() {
//         super();
//         this.state = {
//             todo: "",
//             list: [] // Initialize as an array
//         };
//     }

//     handlechange = (event) => {
//         this.setState({ todo: event.target.value });
//     }

//     handlesubmit = (e) => {
//         e.preventDefault();
//         this.setState(prevState => ({
//             list: [...prevState.list, prevState.todo], // Append new todo
//             todo: "" // Clear input after submission
//         }));
//     }

//   del1=()=>{

//  this.setState({list:this.state.list.filter((item,index)=>index!==this.state.list.indexOf(item,index))})
//   }
    
 
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handlesubmit}>
//                     <input type="text" name="todo" onChange={this.handlechange} value={this.state.todo} />
//                     <input type="submit" />
//                 </form>
                
//                 <ul>
//                     {this.state.list.map((item, index) => (
                       
//                          <li key={index}>{item}
//                          <button onClick={this.del1}>delete</button>
//                          </li>// Render each todo item in a list
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Todo;




import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todo: "",
            list: [] // Initialize as an array
        };
    }

    handlechange = (event) => {
        this.setState({ todo: event.target.value });
    }

    handlesubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            list: [...prevState.list, prevState.todo], // Append new todo
            todo: "" // Clear input after submission
        }));
    }

    handleDelete = (index) => {
        this.setState(prevState => {
            const newList = prevState.list.filter((item, i) => i !== index);
            return { list: newList };
        });
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1 style={{textAlign:"center", marginTop:"20vh"}}> todo task 10</h1>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" name="todo" onChange={this.handlechange} value={this.state.todo} />
                    <input type="submit" />
                </form>
                
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => this.handleDelete(index)}>Delete</button> {/* Delete button */}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todo;