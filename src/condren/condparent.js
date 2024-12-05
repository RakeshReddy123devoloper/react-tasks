import Condchild from "./condchild";
function Condparent(){

    return(
        <div style={{backgroundColor:"aqua",display:"flex",justifyContent:"center"}}>
<Condchild isloggedin={false}/>
        </div>
    )
}
export default Condparent;