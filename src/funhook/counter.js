import React,{useState} from "react";
export default function Count(){
    const [count,setText] =useState(0);
    const [color,setcolor] =useState("black")
    let handlebutton=()=>{
        setText(count+1)
        
        setcolor("blue")
    }
    const handlebutton1=()=>{
        setText(count-1)
        setcolor("green")
    }
    const handlebutton2=()=>{
        setText(count+5)
        setcolor("pink")
    }
    const handlebutton3=()=>{
        setText(count-5)
        setcolor("red")
    }
    return (
        <div style={{textAlign:"center"}}>
<h1 style={{textAlign:"center", marginTop:"20vh"}}>TASK : 13</h1>
<h1 style={{color:color}}>{count} </h1>
<button  onClick={handlebutton}>+1</button>
<button onClick={handlebutton1}>-1</button>
<button onClick={handlebutton2}>+5</button>
<button onClick={handlebutton3}>-5</button>
        </div>
    )
}