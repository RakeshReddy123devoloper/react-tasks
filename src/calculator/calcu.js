// import React,{useState} from "react";
// export default function Calcu(){
//   const [input, setinput] = useState("");
//   const [result,setResult]=useState()

// const handlebutton=(e)=>{
//     setinput(e.target.value)
// }
// const handle=()=>{
// setResult(eval(input))
// }

// return(
// <div>

//     <h1>Calculator</h1>
//     <div>
//       <input type="text" value={(input)}  onChange={handlebutton}/>
//       <button onClick={handle}> result</button>
//     <h1>{result}</h1>
//     <button onClick={()=>setinput(input+"1")}>1</button>
//     </div>
// </div>
// )
// }

// import React, { useState } from "react";
// import "./calcu.css";
// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const handlechange = (e) => {
//     setinput(e.target.value);
//   };
//   const handleresult = () => {
//     setresult(eval(input));
//     localStorage.setItem(setinput(input),setresult(eval(input)))
//     sessionStorage.setItem(input)
//   };
//   const onclick = () => {

//     setinput("");
//     setresult(0);
//   };
//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br />
//           <button
//             style={{ margin: "2vh", height: "4vw", width: "5vw" }}
//             onClick={handleresult}
//           >
//             result
//           </button>
//           <h4>Result is:{result}</h4>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>clear</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calcu;

// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//   };

//   const handleresult = () => {
//     const evaluatedResult = eval(input);
//     setresult(evaluatedResult);

//     // Store input and result in local storage
//     localStorage.setItem("calculatorInput", input);
//     localStorage.setItem("calculatorResult", evaluatedResult);

//     // Store input in session storage
//     sessionStorage.setItem("calculatorInput", input);
//     sessionStorage.setItem("calculatorResult", evaluatedResult);
//   };

//   const onclick = () => {
//     setinput("");
//     setresult(0);
//   };

//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br />
//           <button
//             style={{ margin: "2vh", height: "4vw", width: "5vw" }}
//             onClick={handleresult}
//           >
//             result
//           </button>
//           <h4>Result is: {result}</h4>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>clear</button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Calcu;

// import React, { useState, useEffect } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [storedInput, setStoredInput] = useState("");
//   const [storedResult, setStoredResult] = useState(0);

//   useEffect(() => {
//     // Retrieve data from local storage when the component mounts
//     const inputFromStorage = localStorage.getItem("calculatorInput");
//     const resultFromStorage = localStorage.getItem("calculatorResult");

//     if (inputFromStorage) {
//       setStoredInput(inputFromStorage);
//     }
//     if (resultFromStorage) {
//       setStoredResult(resultFromStorage);
//     }
//   }, []);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//   };

//   const handleresult = () => {
//     const evaluatedResult = eval(input);
//     setresult(evaluatedResult);

//     // Store input and result in local storage
//     localStorage.setItem("calculatorInput", input);
//     localStorage.setItem("calculatorResult", evaluatedResult);

//     // Store input in session storage
//     sessionStorage.setItem("calculatorInput", input);
//     sessionStorage.setItem("calculatorResult", evaluatedResult);
//   };

//   const onclick = () => {
//     setinput("");
//     setresult(0);
//   };

//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br />
//           <button
//             style={{ margin: "2vh", height: "4vw", width: "5vw" }}
//             onClick={handleresult}
//           >
//             result
//           </button>
//           <h4>Result is: {result}</h4>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>clear</button>
//         </div>

//         {/* Display stored input and result from local storage */}
//         <div>
//           <h4>Stored Input: {storedInput}</h4>
//           <h4>Stored Result: {storedResult}</h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calcu;

// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]); // New state for history
//   const handlechange = (e) => {
//     setinput(e.target.value);
//     setresult(result)

//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);

//       setinput("");

//   // Get the current date
//     const currentDate = new Date().toLocaleString(); // Includes date and time
//       // Update history
//       const newEntry = { input, result: evaluatedResult,date:currentDate };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//     setresult(0);
//   };

//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input 
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br />
//           <button
//             style={{ margin: "2vh", height: "4vw", width: "5vw" }}
//             onClick={handleresult}
//           >
//             result
//           </button>
//           <h4>Result is: {result}</h4>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>
//             1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>clear</button>
//         </div>
//         <div>
//           <h3 style={{ marginTop: "-60vh" }}>History</h3>
//           <ul>
//             {history.map((entry, index) => (
//               <li key={index}>
//                 Date:{entry.date} |
//                 Input: {entry.input}, output: {entry.result}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calcu;







// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//     setresult(result);
//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);
//       setinput("");

//       // Get the current date in "YYYY-MM-DD" format
//       const currentDate = new Date().toISOString().split("T")[0];

//       // Update history
//       const newEntry = { input, result: evaluatedResult, date: currentDate };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//     setresult(0);
//   };

//   // Group history by date
//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input 
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br />
//           <button
//             style={{ margin: "2vh", height: "4vw", width: "5vw" }}
//             onClick={handleresult}
//           >
//             result
//           </button>
//           <h4>Result is: {result}</h4>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>clear</button>
//         </div>
//         <div>
//           <h3 style={{ marginTop: "-60vh" }}>History</h3>
//           <ul>
//             {Object.keys(groupedHistory).map((date) => (
//               <li key={date}>
//                 <strong>Date: {date}</strong>
//                 <ul>
//                   {groupedHistory[date].map((entry, index) => (
//                     <li key={index}>
//                       Input: {entry.input}, Output: {entry.result}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calcu;



// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//     // setresult(result);
//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);
//       setinput("");

//       // Get the current date and time
//       const currentDate = new Date().toISOString().split("T")[0];
//       const currentTime = new Date().toLocaleTimeString();

//       // Update history
//       const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//     
//   };

//   // Group history by date
//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input 
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br />
//           <button
//             style={{ margin: "2vh", height: "4vw", width: "5vw" }}
//             onClick={handleresult}
//           >
//             result
//           </button>
//           <h4>Result is: {result}</h4>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>clear</button>
//         </div>
//         <div>
//           <h3 style={{ marginTop: "-60vh" }}>History</h3>
//           <ul>
//             {Object.keys(groupedHistory).map((date) => (
//               <li key={date}>
//                 <strong>Date: {date}</strong>
//                 <ul>
//                   {groupedHistory[date].map((entry, index) => (
//                     <li key={index}>
//                       Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calcu;









// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [history, setHistory] = useState([]);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setinput(evaluatedResult); // Set the input to the evaluated result

//       // Get the current date and time
//       const currentDate = new Date().toISOString().split("T")[0];
//       const currentTime = new Date().toLocaleTimeString();

//       // Update history
//       const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//   };

//   // Group history by date
//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input 
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br/>
//           <button
//             style={{ margin: "2vh", height: "4vw", width: "5vw" }}
//             onClick={handleresult}
//           >
//             result
//           </button>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>clear</button>
//         </div>
//         <div>
//           <h3 style={{ marginTop: "-60vh" }}>History</h3>
//           <ul>
//             {Object.keys(groupedHistory).map((date) => (
//               <li key={date}>
//                 <strong>Date: {date}</strong>
//                 <ul>
//                   {groupedHistory[date].map((entry, index) => (
//                     <li key={index}>
//                       Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calcu;










// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//     setresult(result);
//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);
//       setinput("");

//       // Get the current date and time
//       const currentDate = new Date().toISOString().split("T")[0];
//       const currentTime = new Date().toLocaleTimeString();

//       // Update history
//       const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//     setresult(0);
//   };

//   const handleBackspace = () => {
//     setinput(input.slice(0, -1)); // Remove the last character from the input
//   };

//   // Group history by date
//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input 
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br />
//           <button
//             style={{ margin: "2vh", height: "4vw", width: "5vw" }}
//             onClick={handleresult}
//           >
//             result
//           </button>
//           <h4>Result is: {result}</h4>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>clear</button>
//           <button onClick={handleBackspace}>Backspace</button>
//         </div>
//         <div>
//           <h3 style={{ marginTop: "-60vh" }}>History</h3>
//           <ul>
//             {Object.keys(groupedHistory).map((date) => (
//               <li key={date}>
//                 <strong>Date: {date}</strong>
//                 <ul>
//                   {groupedHistory[date].map((entry, index) => (
//                     <li key={index}>
//                       Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calcu;




// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);
//       setinput("");

//       const currentDate = new Date().toISOString().split("T")[0];
//       const currentTime = new Date().toLocaleTimeString();

//       const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//     setresult(0);
//   };

//   const handleBackspace = () => {
//     setinput(input.slice(0, -1));
//   };

//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div className="div2">
//       <center>
//         <input
//           className="input1"
//           type="text"
//           name="input"
//           value={input}
//           onChange={handlechange}
//         />
//         <br />
//         <button className="button" onClick={handleresult}>Result</button>
//         <h4>Result is: {result}</h4>
//       </center>
//       <div className="div1">
//         {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "*", "/"].map((item) => (
//           <button key={item} className="button" onClick={() => setinput(input + item)}>{item}</button>
//         ))}
//         <button className="button" onClick={onclick}>Clear</button>
//         <button className="button" onClick={handleBackspace}>Backspace</button>
//       </div>
//       <div>
//         <h3 style={{ marginTop: "-60vh" }}>History</h3>
//         <ul>
//           {Object.keys(groupedHistory).map((date) => (
//             <li key={date}>
//               <strong>Date: {date}</strong>
//               <ul>
//                 {groupedHistory[date].map((entry, index) => (
//                   <li key={index}>
//                     Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Calcu;



// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//     setresult(result);
//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);
//       setinput("");

//       // Get the current date and time
//       const currentDate = new Date().toISOString().split("T")[0];
//       const currentTime = new Date().toLocaleTimeString();

//       // Update history
//       const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//     // setresult(0);
//   };

//   const handleBackspace = () => {
//     setinput(input.slice(0, -1)); // Remove the last character from the input
//   };

//   // Group history by date
//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input 
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br />
//           <button
//             style={{ margin: "2vh", height: "4vw", width: "5vw" }}
//             onClick={handleresult}
//           >
//             result
//           </button>
//           <h4>Result is: {result}</h4>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>clear</button>
//           <button onClick={handleBackspace}>Backspace</button>
//         </div>
//         <div>
//           <h3 style={{ marginTop: "-60vh" }}>History</h3>
//           <ul>
//             {Object.keys(groupedHistory).map((date) => (
//               <li key={date}>
//                 <strong>Date: {date}</strong>
//                 <ul>
//                   {groupedHistory[date].map((entry, index) => (
//                     <li key={index}>
//                       Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calcu;







// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//     setresult(result);
//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);
//       setinput("");

//       // Get the current date and time
//       const currentDate = new Date().toISOString().split("T")[0];
//       const currentTime = new Date().toLocaleTimeString();

//       // Update history
//       const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//   };

//   const handleBackspace = () => {
//     setinput(input.slice(0, -1)); // Remove the last character from the input
//   };

//   // Group history by date
//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input 
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br />
//           {/* Result and Backspace buttons container */}
//           <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
//             <button
//               style={{ height: "4vw", width: "8vw" }}
//               onClick={handleresult}
//             >
//               Result
//             </button>
//             <button
//               style={{ height: "4vw", width: "8vw" }}
//               onClick={handleBackspace}
//             >
//               Backspace
//             </button>
//           </div>
//           <h4>Result is: {result}</h4>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>Clear</button>
//         </div>
//         <div>
//           <h3 style={{ marginTop: "-60vh" }}>History</h3>
//           <ul>
//             {Object.keys(groupedHistory).map((date) => (
//               <li key={date}>
//                 <strong>Date: {date}</strong>
//                 <ul>
//                   {groupedHistory[date].map((entry, index) => (
//                     <li key={index}>
//                       Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calcu;





// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);
//       setinput(String(evaluatedResult)); // Update input box with the result

//       // Get the current date and time
//       const currentDate = new Date().toISOString().split("T")[0];
//       const currentTime = new Date().toLocaleTimeString();

//       // Update history
//       const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//     setresult(result);
//   };

//   const handleBackspace = () => {
//     setinput(input.slice(0, -1)); // Remove the last character from the input
//   };

//   // Group history by date
//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div>
//       <div className="div2">
//         <center>
//           <input 
//             className="input1"
//             type="text"
//             name="input"
//             value={input}
//             onChange={handlechange}
//           />
//           <br />
//           {/* Result and Backspace buttons container */}
//           <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
//             <button
//               style={{ height: "4vw", width: "8vw" }}
//               onClick={handleresult}
//             >
//               Result
//             </button>
//             <button
//               style={{ height: "4vw", width: "8vw" }}
//               onClick={handleBackspace}
//             >
//               Backspace
//             </button>
//           </div>
//         </center>
//         <div className="div1">
//           <button onClick={() => setinput(input + "1")}>1</button>
//           <button onClick={() => setinput(input + "2")}>2</button>
//           <button onClick={() => setinput(input + "3")}>3</button>
//           <button onClick={() => setinput(input + "4")}>4</button>
//           <button onClick={() => setinput(input + "5")}>5</button>
//           <button onClick={() => setinput(input + "6")}>6</button>
//           <button onClick={() => setinput(input + "7")}>7</button>
//           <button onClick={() => setinput(input + "8")}>8</button>
//           <button onClick={() => setinput(input + "9")}>9</button>
//           <button onClick={() => setinput(input + "0")}>0</button>
//           <button onClick={() => setinput(input + ".")}>.</button>
//           <button onClick={() => setinput(input + "+")}>+</button>
//           <button onClick={() => setinput(input + "-")}>-</button>
//           <button onClick={() => setinput(input + "*")}>*</button>
//           <button onClick={() => setinput(input + "/")}>/</button>
//           <button onClick={onclick}>Clear</button>
//         </div>
//         <div>
//           <h3 style={{ marginTop: "-40vh" }}>History</h3>
//           <ul>
//             {Object.keys(groupedHistory).map((date) => (
//               <li key={date}>
//                 <strong>Date: {date}</strong>
//                 <ul>
//                   {groupedHistory[date].map((entry, index) => (
//                     <li key={index}>
//                       Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calcu;







// import React, { useState } from "react";
// import "./calcu.css";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]);

//   const handlechange = (e) => {
//     setinput(e.target.value);
//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);
//       setinput(String(evaluatedResult)); // Update input box with the result

//       // Get the current date and time
//       const currentDate = new Date().toISOString().split("T")[0];
//       const currentTime = new Date().toLocaleTimeString();

//       // Update history
//       const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//     setresult(result)
//   };

//   const handleBackspace = () => {
//     setinput(input.slice(0, -1)); // Remove the last character from the input
//   };

//   // Group history by date
//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div className="div1">
//       <div className="calculator">
//         <input 
//           className="input"
//           type="text"
//           value={input}
//           onChange={handlechange}
//           placeholder="Enter calculation"
//         />
//         <div className="div2">
//           <button className="result" onClick={handleresult}>Result</button>
//           <button className="result" onClick={handleBackspace}>Backspace</button>
//         </div>
//         <div className="buttons-grid">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
//             <button key={num} onClick={() => setinput(input + num)}>{num}</button>
//           ))}
//           {["+", "-", "*", "/", "."].map((operator) => (
//             <button key={operator} onClick={() => setinput(input + operator)}>{operator}</button>
//           ))}
//           <button className="clear-button" onClick={onclick}>Clear</button>
//         </div>
//       </div>
//       <div className="history">
//         <h3>History</h3>
//         <ul>
//           {Object.keys(groupedHistory).map((date) => (
//             <li key={date}>
//               <strong>Date: {date}</strong>
//               <ul>
//                 {groupedHistory[date].map((entry, index) => (
//                   <li key={index}>
//                     Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Calcu;



// import React, { useState } from "react";
// import "./calcu.css";
// import flow from "../musicreact/Bujji.mp3"

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]);

//   // Preload audio file
//   const playSound = () => {
//     const audio = new Audio(flow); // Replace with the path to your audio file
//     audio.play();
//   };

//   const handlechange = (e) => {
//     setinput(e.target.value);
//   };

//   const handleresult = () => {
   
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);
//       setinput(String(evaluatedResult)); // Update input box with the result

//       // Get the current date and time
//       const currentDate = new Date().toISOString().split("T")[0];
//       const currentTime = new Date().toLocaleTimeString();

//       // Update history
//       const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     playSound();
//     setinput("");
//   };

//   const handleBackspace = () => {
//     playSound();
//     setinput(input.slice(0, -1)); // Remove the last character from the input
//   };

//   // Group history by date
//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div className="div1">
//       <div className="calculator">
//         <input 
//           className="input"
//           type="text"
//           value={input}
//           onChange={handlechange}
//           placeholder="Enter calculation"
//         />
//         <div className="div2">
//           <button className="result" onClick={() => { playSound(); handleresult(); }}>Result</button>
//           <button className="result" onClick={() => { playSound(); handleBackspace(); }}>Back</button>
//         </div>
//         <div className="buttons-grid">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
//             <button key={num} onClick={() => { playSound();playSound(); setinput(input + num); }}>{num}</button>
//           ))}
//           {["+", "-", "*", "/", "."].map((operator) => (
//             <button key={operator} onClick={() => { playSound(); setinput(input + operator); }}>{operator}</button>
//           ))}
//           <button className="clear-button" onClick={() => { playSound(); onclick(); }}>Clear</button>
//         </div>
//       </div>
//       <div className="history">
//         <h3>History</h3>
//         <ul>
//           {Object.keys(groupedHistory).map((date) => (
//             <li key={date}>
//               <strong>Date: {date}</strong>
//               <ul>
//                 {groupedHistory[date].map((entry, index) => (
//                   <li key={index}>
//                     Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Calcu;


// import React, { useState } from "react";
// import "./calcu.css";
// import flow from "../musicreact/Bujji.mp3";

// function Calcu() {
//   const [input, setinput] = useState("");
//   const [result, setresult] = useState(0);
//   const [history, setHistory] = useState([]);

//   // Preload audio file
//   const playSound = () => {
//     const audio = new Audio(flow);
//     audio.play();
//   };

//   const handlechange = (e) => {
//     setinput(e.target.value);
//   };

//   const handleresult = () => {
//     try {
//       const evaluatedResult = eval(input);
//       setresult(evaluatedResult);
//       setinput(String(evaluatedResult)); // Update input box with the result

//       // Get the current date and time
//       const currentDate = new Date().toISOString().split("T")[0];
//       const currentTime = new Date().toLocaleTimeString();

//       // Update history
//       const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
//       const updatedHistory = [...history, newEntry];
//       setHistory(updatedHistory);
//       localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
//     } catch (error) {
//       alert("Invalid expression");
//     }
//   };

//   const onclick = () => {
//     setinput("");
//   };

//   const handleBackspace = () => {
//     setinput(input.slice(0, -1)); // Remove the last character from the input
//   };

//   // Function to handle number button click
//   const handleNumberClick = (num) => {
//     if (input === "") {
//       // Play music only if the input is empty
//       playSound();
//     }
//     setinput(input + num);
//   };

//   // Group history by date
//   const groupedHistory = history.reduce((acc, entry) => {
//     if (!acc[entry.date]) {
//       acc[entry.date] = [];
//     }
//     acc[entry.date].push(entry);
//     return acc;
//   }, {});

//   return (
//     <div className="div1">
//       <div className="calculator">
//         <input 
//           className="input"
//           type="text"
//           value={input}
//           onChange={handlechange}
//           placeholder="Enter calculation"
//         />
//         <div className="div2">
//           <button className="result" onClick={handleresult}>Result</button>
//           <button className="result" onClick={handleBackspace}>Back</button>
//         </div>
//         <div className="buttons-grid">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
//             <button key={num} onClick={() => handleNumberClick(num)}>
//               {num}
//             </button>
//           ))}
//           {["+", "-", "*", "/", "."].map((operator) => (
//             <button key={operator} onClick={() => setinput(input + operator)}>
//               {operator}
//             </button>
//           ))}
//           <button className="clear-button" onClick={onclick}>Clear</button>
//         </div>
//       </div>
//       <div className="history">
//         <h3>History</h3>
//         <ul>
//           {Object.keys(groupedHistory).map((date) => (
//             <li key={date}>
//               <strong>Date: {date}</strong>
//               <ul>
//                 {groupedHistory[date].map((entry, index) => (
//                   <li key={index}>
//                     Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Calcu;



import React, { useState } from "react";
import "./calcu.css";
import one from "../musicreact/1.mp3";
import two from "../musicreact/2.mp3";
import three from "../musicreact/3.mp3";
import four from "../musicreact/4.mp3";
import five from "../musicreact/5.mp3";
import six from "../musicreact/6.mp3";
import seven  from"../musicreact/7.mp3";




function Calcu() {
  const [input, setinput] = useState("");
  const [result, setresult] = useState(0);
  const [history, setHistory] = useState([]);

  // Preload audio file
  const playSound1 = () => {
    const audio = new Audio(one);
    audio.play();
  };
  const playSound2 = () => {
    const audio = new Audio(two);
    audio.play();
  };

  
  const playSound3 = () => {
    const audio = new Audio(three);
    audio.play();
  };

  const playSound4 = () => {
    const audio = new Audio(four);
    audio.play();
  };
  const playSound5 = () => {
    const audio = new Audio(five);
    audio.play();
  };
  const playSound6 = () => {
    const audio = new Audio(six);
    audio.play();
  };
  const playSound7 = () => {
    const audio = new Audio(seven);
    audio.play();
  };
  const handlechange = (e) => {
    setinput(e.target.value);
  };

  const handleresult = () => {
    try {
      const evaluatedResult = eval(input);
      setresult(evaluatedResult);
      setinput(String(evaluatedResult)); // Update input box with the result

      // Get the current date and time
      const currentDate = new Date().toISOString().split("T")[0];
      const currentTime = new Date().toLocaleTimeString();

      // Update history
      const newEntry = { input, result: evaluatedResult, date: currentDate, time: currentTime };
      const updatedHistory = [...history, newEntry];
      setHistory(updatedHistory);
      localStorage.setItem("calculatorHistory", JSON.stringify(updatedHistory));
    } catch (error) {
      alert("Invalid expression");
    }
  };

  const onclick = () => {
    setinput("");
    setresult(result)
  };

  const handleBackspace = () => {
    setinput(input.slice(0, -1)); // Remove the last digit of number
  };

  // Function to handle number button click
  const handleNumberClick = (num) => {
    if (num === 1) {
      // Play sound when button 1 is clicked
       playSound1();
    }
   else if(num===2){
    playSound2();
   }
   else if(num===3){
    playSound3();
   }
   else if(num===4){
    playSound4();
   }
   else if(num===5){
    playSound5();
   }
   else if(num===6){
    playSound6();
   }

   else if(num===7){
    playSound7();
   }

    setinput(input + num);
  };

  // Group history by date
  const groupedHistory = history.reduce((acc, entry) => {
    if (!acc[entry.date]) {
      acc[entry.date] = [];
    }
    acc[entry.date].push(entry);
    return acc;
  }, {});

  return (
  
    <div className="div1">
      <h1>calulator using React Application</h1>
      <div className="calculator">
        <input 
          className="input"
          type="text"
          value={input}
          onChange={handlechange}
          placeholder="Enter calculation"
        />
        <div className="div2">
          <button className="result" onClick={handleresult}>Result</button>
          <button className="result" onClick={handleBackspace}>Back</button>
        </div>
        <div className="buttons-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num)}>
              {num}
            </button>
          ))}
          {["+", "-", "*", "/", "."].map((operator) => (
            <button key={operator} onClick={() => setinput(input + operator)}>
              {operator}
            </button>
          ))}
          <button className="clear-button" onClick={onclick}>Clear</button>
        </div>
      </div>
      <div className="history">
        <h3>History</h3>
        <ul>
          {Object.keys(groupedHistory).map((date) => (
            <li key={date}>
              <strong>Date: {date}</strong>
              <ul>
                {groupedHistory[date].map((entry, index) => (
                  <li key={index}>
                    Input: {entry.input}, Output: {entry.result}, Time: {entry.time}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calcu;





