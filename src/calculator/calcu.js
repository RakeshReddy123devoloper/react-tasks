



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





