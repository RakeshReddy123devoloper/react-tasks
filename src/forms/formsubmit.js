
import React,{ Component } from "react"
class Farm extends Component {
constructor(){
    super();
    this.state = {fname:" ",sname:" ",fullname:" "}
}
handlechange=(event)=>{
    const value=event.target.value;
    if(event.target.name==="fname"){
        this.setState({fname:value})
    }
    else if(event.target.name==="sname"){
        this.setState({sname:value})
    }

}
   
handlesubmit=(e)=>{
   e.preventDefault()
    this.setState({fullname:this.state.fname +" "+ this.state.sname});
        }
render(){
    return (
 <div style={{textAlign:"center"}}>
    <h1 style={{textAlign:"center", marginTop:"20vh"}}> form submission task 8</h1>
    <form onSubmit={this.handlesubmit}>
        <input type="text" name="fname" onChange={this.handlechange}/>
        <input type="text"  name="sname" onChange={this.handlechange}/>
        <input type="submit" />
    </form>
    <h1>{this.state.fullname}</h1>
 </div>
    )
}
}
export default Farm;