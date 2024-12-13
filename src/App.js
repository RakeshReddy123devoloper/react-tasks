// import logo from './logo.svg';
import './App.css';


import Sample from './sample';
import Time from './timetable';
import Parent from "./buttoncards/parent";
import Fresher from './fresherjob';
  import Accordianfakestore from './propsparent'
import Table from './bs-table/bs-parenttable';
import Counter from './counterapp/parent';
import Farm from './forms/formsubmit'
import  Even from './taskeven/even'
import Todo from './todo/todoapp';
import Mount from './lifecycle/mountstate';
import Count from './funhook/counter';
import Update from './updatingstate/update';
import Main from "./react-router/main";



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React js in 10k coders
        </a>
      </header> */}


<Sample/> 
    <Time/>
   <Parent/>
   <Fresher/> 
    <Accordianfakestore/>
    <Table/> 
    <Counter/> 
     <Farm/> 
      <Even/>
     <Todo/>
     <Update/>   
    <Mount/>
  <Count/>  
<Main/>




    </div>
  );
}

export default App;
