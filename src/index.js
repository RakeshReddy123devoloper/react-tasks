import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Sample from './sample';
import Time from './timetable';
// import Img from './img'
// import Header from './header'
// import Footer from './footer'
// import Main from './mobile'
//  import Main from './fakestore';
//  import Fresher from './fresherjob';
  // import Parent from './propsparent'
// import Accordian from './accodian/accodian';
// import Parent from "./buttoncards/parent";
import Condparent from './condren/condparent';
// import Table from './bs-table/bs-parenttable';
// import Parent from './condren1/parent';
// import Parent from './counterapp/parent';
// import Farm from './forms/formsubmit'
// import  Even from './taskeven/even'
// import Todo from './todo/todoapp';
// import Mount from './lifecycle/mountstate';
import Count from './funhook/counter';
// import Update from './updatingstate/update'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sample/> */}
    
{/*     
     <Header/> 
      <Img/> 
    <Footer/>  */}
    {/* <Main/> */}
    
    {/* <Fresher/> */}
    {/* <Parent/> */}
     {/* <Parent/>  */}
     {/* <Accordian/> */}
     <Condparent/>
     {/* <Table/> */}
     {/* <Parent login="user"/> */}
     {/* <Farm/> */}
    {/* <Parent/> */}
    {/* <Even/> */}
    {/* <Todo/> */}
    {/* <Mount/> */}
    {/* <Update/> */}
    <Count/>
    <Time/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
