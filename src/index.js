import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
 import reportWebVitals from './reportWebVitals';
// import Sample from './sample';
// import Time from './timetable';
// // import Img from './img'
// import Header from './header'
// import Footer from './footer'
// import Tablefake from './fakestore';
//  import Fresher from './fresherjob';
  import Accordianfakestore from './propsparent'
// import Accordian from './accodian/accodian';
// import Parent from "./buttoncards/parent";
// import Condparent from './condren/condparent';
// import Table from './bs-table/bs-parenttable';
// import Userpage from './condren1/parent';
// import Counter from './counterapp/parent';
// import Farm from './forms/formsubmit'
// import  Even from './taskeven/even'
// import Todo from './todo/todoapp';
// import Mount from './lifecycle/mountstate';
// import Count from './funhook/counter';
// import Mobile from './mobile';
// import Update from './updatingstate/update'
// import Calcu from "./calculator/calcu";

// import Cart from './cart/cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sample/>
    
    
     <Header/> 
      <Img/> 
    <Footer/> 
    */}
    
   
     {/* <Counter/> */}
     <Accordianfakestore/>
     {/* <Accordian/> */}
     {/* <  Tablefake/> */}
     {/* <Table/> */}
     {/* <Userpage login="user"/> */}
     {/* <Farm/> */} 
    {/* <Parent/> */}
   {/* <Even/>
    <Todo/>
    <Mount/>
    <Update/> */}
    
   {/* <Condparent/>
   <Count/>
  <Time/>S
 <Mobile/>
     <Fresher/> */} 
      {/* <Calcu/> */}
      {/* <Cart/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
