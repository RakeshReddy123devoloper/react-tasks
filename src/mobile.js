import { Component } from "react";
import './moble.css'
import mobile from './imgreact/mobile1.jpg'
import mobile1 from './imgreact/mobile2.jpg'
import mobile2 from './imgreact/mobile3.jpg'
const obj={
    productname:"mobiles",
    price:55000,
    productavail:false,
    dateissue:"november",
device:"realme 5g",
ram:"4gb",
rom:"128gp"
}
var obj2={
    device:"redmi 5g",
    productname:"mobiles",
    price:50000,
    productavail:true,
    dateissue:"september",
ram:"6gb",
rom:"64gb"
}
var obj3={
    device:"samsung 5g",
    productname:"mobiles",
    price:64000,
    productavail:true,
    dateissue:"october",    
ram:"12gb",
rom:"220gb"
}
class Mobile extends Component{

    render(){
        return(
            <>
            <div>
                <h1 style={{textAlign:"center"}}>task 4 :21/11/2024 ui cards</h1>
            </div>
             <h1 style={obj.productavail?styles.container1:styles.container3}>{obj.productname}</h1>
    <div className="santhu">
   
    <div className="devices">
<img className='rakesh1' src={mobile} alt='flower'/>
<h3 style={obj.productavail?styles.container4:styles.container2}>{obj3.device}:name</h3>
<h3>{obj.ram}     :ram</h3>
<h3>{obj.rom}     :rom</h3>
<h3>{obj.dateissue}:date if issue</h3>
<h3>{obj.price}    : price</h3>
<h3>{obj.productname}:mobiles</h3>
</div>


   
<div className="devices1">
<img className='rakesh2' src={mobile1} alt='flower1'/>
<h3 style={obj.productavail?styles.container2:styles.container4}>{obj2.device}:name</h3>
<h3>{obj.ram}     :ram</h3>
<h3>{obj.rom}     :rom</h3>
<h3>{obj.dateissue}:date if issue</h3>
<h3>{obj.price}    : price</h3>
<h3>{obj.productname}:mobiles</h3>
</div>

 
     
<div className="devices2">
<img className='rakesh3' src={mobile2} alt='flower2'/>
<h3 style={obj.productavail?styles.container4:styles.container2}>{obj.device}:name</h3>
<h3>{obj.ram}     :ram</h3>
<h3>{obj.rom}     :rom</h3>
<h3>{obj.dateissue}:date if issue</h3>
<h3>{obj.price}    : price</h3>
<h3>{obj.productname}:mobiles</h3>
</div>
    </div>
   <h2 style={{color:"green",textAlign:"center"}}>note:if green color is shown then the product is available</h2>
   <h2 style={{color:"red",textAlign:"center"}}>note:if red color is shown then the product is available</h2>
       </>
        )
    }
}
export default Mobile
const styles={
   container1:{
    color:"green",
    paddingLeft:"50vw",
   },
   container2:{
color:"red"
   },
   container3:{
paddingLeft:"50vw",
color:"blue"
   },container4:{
    color:"green"
   }
 }
