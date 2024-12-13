import React from "react"
import "./route.css"
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Sample from "../sample"
import Time from "../timetable"
import Fresher from "../fresherjob"
import Parent from "../buttoncards/parent"
import Accordianfakestore from "../propsparent"
import Table from '../bs-table/bs-parenttable';
import Counter from '../counterapp/parent';
import Farm from '../forms/formsubmit'
import  Even from '../taskeven/even'
import Todo from '../todo/todoapp';
import Mount from '../lifecycle/mountstate';
import Count from '../funhook/counter';

function Main1(){
    return(
     <div >
         <Router>
<div style={{backgroundColor:"orange", padding:"15px", margin:"auto", display:"flex",gap:"2vw",justifyContent:"center" }}>
    <Link className="link1" to="/pagenot1">task1</Link>
    <Link className="link1" to="/about1">task2</Link>
    <Link className="link1" to="/pricing3">task3</Link>
    <Link className="link1" to="/contact2">task4</Link>
    <Link className="link1" to="/home4">task5</Link>
    <Link className="link1" to="/home5">task6</Link>
    <Link className="link1" to="/home6">task7</Link>
    <Link className="link1" to="/home7">task8</Link>
    <Link className="link1" to="/home8">task9</Link>
    <Link className="link1" to="/home9">task10</Link>
    <Link className="link1" to="/home10">task11</Link>
    <Link className="link1" to="/home11">task12</Link> 
</div>
<Routes>
<Route path="/pagenot1" element={<Sample/>}>   </Route>
<Route path="/about1" element={<Time/>}>   </Route>
<Route path="/contact2" element={<Fresher/>}>   </Route>
<Route path="/pricing3" element={<Parent/>}>   </Route>
<Route path="/home4" element={<Accordianfakestore/>}>   </Route>
<Route path="/home5" element={<Table/>}>   </Route> 
<Route path="/home6" element={<Counter/>}>   </Route>
<Route path="/home7" element={<Farm/>}>   </Route>
<Route path="/home8" element={<Even/>}>   </Route>
<Route path="/home9" element={<Todo/>}>   </Route>
<Route path="/home10" element={<Mount/>}>   </Route>
<Route path="/home11" element={<Count/>}>   </Route> 
</Routes>
      </Router>
     </div>
    )
}

export default Main1