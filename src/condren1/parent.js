import React from "react";
import Admin from "./admin";
import User from "./user";
function Userpage(props){
    return(
        <div>
    { props.login==="user"?<User/>:<Admin/>}
        </div>
    )
}
export default Userpage;