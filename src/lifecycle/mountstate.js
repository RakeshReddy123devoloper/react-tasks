// import React from "react";
// import Child from "../buttoncards/child";
// import Spinner from "react-bootstrap/Spinner";
// class Mount extends React.Component {
//   constructor() {
//     console.log("constucting");
//     super();
//     this.state = { products: [],loading:true };
//   }
//   componentDidMount() {
//     // setTimeout(()=>{

//     // },1000)
//     // console.log("component did mount")
   
//     <div>
//       {this.stateloading? (
//         <h1>
//           {" "}
//           {fetch("https://fakestoreapi.com/products")
//             .then((res) => res.json())
//             .then((json) => {
//               this.setState({ products: json ,loading:false});
//             })}
//         </h1>
//       ) : (
//         <h1>
//           <Spinner animation="border" role="status">
//             <span className="visually-hidden" style={{ color: "red" }}>
//               Loading...
//             </span>
//           </Spinner>
//         </h1>
//       )}
//     </div>;
//   }
//   static getDerivedStateFromProps() {
//     console.log("getDerivedStateFromProps");
//     return null;
//   }
//   if() {}
//   render() {
//     console.log("rendering");
//     return (
//       <div>
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: "10px",
//           }}
//         >
//           {this.state.products.map((a, b) => {
//             return (
//               <Child
//                 key={b}
//                 img={a.image}
//                 title={a.title}
//                 desc={a.description}
//                 cat={a.category}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
// export default Mount;


// import React from "react";
// import Child from "../buttoncards/child";
// import Spinner from "react-bootstrap/Spinner";

// class Mount extends React.Component {
//   constructor() {
//     console.log("constructing");
//     super();
//     this.state = { products: [], loading: true }; // Added loading state
//   }

//   componentDidMount() {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({ products: json, loading: false }); // Set loading to false after fetching
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         this.setState({ loading: false }); // Handle error and stop loading
//       });
//   }

//   static getDerivedStateFromProps() {
//     console.log("getDerivedStateFromProps");
//     return null;
//   }

//   render() {
//     console.log("rendering");

//     if (this.state.loading) {
//       return (
//         <h1>
//           <Spinner animation="border" role="status">
//             <span className="visually-hidden" style={{ color: "red" }}>
//               Loading...
//             </span>
//           </Spinner>
//         </h1>
//       );
//     }

//     return (
//       <div>
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: "10px",
//           }}
//         >
//           {this.state.products.map((a) => {
//             return (
//               <Child
//                 key={a.id} // Assuming 'id' is a unique identifier in the product data
//                 img={a.image}
//                 title={a.title}
//                 desc={a.description}
//                 cat={a.category}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default Mount;


import React from "react";
import Child from "../buttoncards/child";
import Spinner from "react-bootstrap/Spinner";

class Mount extends React.Component {
  constructor() {
    console.log("constructing");
    super();
    this.state = { products: [], loading: true };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json, loading: false });
      })
   
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("rendering");

    if (this.state.loading) {
      return (
        <h1 style={{padding:"20% 40%"}}>
          <Spinner animation="border" role="status" style={{color:"black", fontSize:"40vh", }}>
            <span className="visually-hidden" style={{ color: "red" }}>
              
            </span>
          </Spinner>
        </h1>
      );
    }

    return (
      <div style={{textAlign:"center"}}>
        <h1 style={{textAlign:"center"}}>buttoncards task 12</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {this.state.products.map((a) => {
            return (
              <Child
                key={a.id}
                img={a.image}
                title={a.title}
                desc={a.description}
                cat={a.category}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Mount;