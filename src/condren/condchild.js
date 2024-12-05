import React from "react";
// function Condchild(){
//     if(true){
//         return <div><h1>welcome</h1></div>;
//     }
//     else{
//         return <div>goodbye</div>;
//     }
// }
//     export default Condchild;


    function Condchild(props){
       return(
       <div>
        { props.isloggedin?<h1>loginsucessful</h1>:<h1>loginunsucessful</h1>}
       </div>
       )
    }
        export default Condchild;