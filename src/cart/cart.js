
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Cart() {
//   const [products, setProducts] = useState([]); // Array to store all products
//   const [cart, setCart] = useState([]); // Array to store cart items
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     // Fetch all products on component mount
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data); // Set the fetched products
//         setLoading(false); // Set loading to false
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setLoading(false); // Set loading to false in case of error
//       });
//   }, []); // Empty dependency array ensures this runs only once

//   // Function to add a product to the cart
//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]); // Add product to the cart
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>All Products</h1>
//       {loading ? (
//         <p>Loading products...</p>
//       ) : (
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//           {products.map((product) => (
//             <div
//               key={product}
//               style={{
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 padding: "10px",
//                 width: "200px",
//                 textAlign: "center",
//               }}
//             >
//               <h3>{product.title}</h3>
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   objectFit: "contain",
//                   margin: "10px 0",
//                 }}
//               />
//               <p><strong>Price:</strong> ${product.price}</p>
//               <p style={{ fontSize: "14px" }}>
//                 <strong>Category:</strong> {product.category}
//               </p>
//               <button
//                 onClick={() => addToCart(product)}
//                 style={{
//                   backgroundColor: "#28a745",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   padding: "5px 10px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       <h2 style={{ marginTop: "40px" }}>Cart</h2>
//       {cart.length === 0? (
//         <p>No items in the cart.</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index} style={{ marginBottom: "10px" }}>
//               <strong>{item.title} {item.id}</strong> - ${item.price}
              
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Cart;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { use } from "react";
function Cart(){
const [product,setProduct]=useState("")

useEffect(()=>{
    axios
      .get("https://fakestoreapi.com/products").then((res)=>{

      })
})

return(
    <div>

    </div>
)
}

export default Cart