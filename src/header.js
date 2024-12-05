// import react from 'react'
import './header.css'
function Header(){
    return(
       <div>
        <div style={{textAlign:"center"}}>
            <h1>TASK : 1</h1>
        </div>
         <div className='div1'>
            
            <a className='href'  href='hello'><h4 className='h4'>home</h4></a> 
           <a  className='href' href='helo'>  <h4 className='h4'>about</h4></a> 
           <a  className='href' href='helo'>  <h4 className='h4'>contacts</h4></a>  
           <a  className='href' href='helo'>  <h4 className='h4'>aboutus</h4></a>  
           <a  className='href' href='helo'>  <h4 className='h4'>helpline</h4></a> 
         </div>
       </div>
    )
}
export default Header;