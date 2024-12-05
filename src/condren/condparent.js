import Condchild from "./condchild";
function Condparent(){

    return(
       <div>
        <h1 style={{textAlign:"center"}}>TASK : 1</h1>
         <div style={{backgroundColor:"aqua",display:"flex",justifyContent:"center"}}>
<Condchild isloggedin={false}/>
        </div>
       </div>
    )
}
export default Condparent;