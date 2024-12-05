import React from "react";
import Admin from "./admin";
import User from "./user";
function Parent(props){
    return(
        <div>
    { props.login==="user"?<User/>:<Admin/>}
        </div>
    )
}
export default Parent;