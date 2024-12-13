import React from "react"
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Home from "../react-router/home"
import About from "../react-router/about"
import Contact from "../react-router/contact"
import Page from "../react-router/pagenot"
import Pricing from "../react-router/pricing"
import "./rou.css";

function Main(){
    return(
       
     <div >
        <h1 style={{textAlign:"center", marginTop:"20vh"}}> practices router</h1>
         <Router>
<div style={{backgroundColor:"orange", padding:"15px", margin:"auto", display:"flex", gap:"4vw",justifyContent:"center"}}>
    <Link to="/home">Home</Link>
    <Link  to="/about">About</Link>
    <Link  to="/contact">Contact</Link>
    <Link  to="/pricing">Pricing</Link>
    <Link  to="/pagenot">Page Not Found</Link>
</div>
<Routes>
<Route path="*" element={<Page/>}>   </Route>
<Route path="/about" element={<About/>}>   </Route>
<Route path="/contact" element={<Contact/>}>   </Route>
<Route path="/pricing" element={<Pricing/>}>   </Route>
<Route path="/home" element={<Home/>}>   </Route>
</Routes>
      </Router>
     </div>
 
    )
}

export default Main