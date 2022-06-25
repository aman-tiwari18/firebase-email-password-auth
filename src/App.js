import React from 'react';
import Login from './pages/Login';
import './App.css';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Home from './pages/Home';

// import Account from './pages/Account';



function App() {  
  return (
   <BrowserRouter>
      <Routes>
        <Route path = "/Home"  element = {<Home/>}/>
        <Route path = "/"  element = {<Login/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
