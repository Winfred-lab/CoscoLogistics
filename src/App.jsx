import React from 'react';
import ReactDOM from 'react-dom/client';
// import {HashRouter as Router, Routes, Route} from "react-router-dom"
import Hero  from './Componets/Hero';
import Home from './Componets/Home';
import About from './Componets/About';
import Network from './Componets/Network';
import Exploring from './Componets/Exploring';
import Contact from './Componets/Contact';
import Footer from './Componets/Footer';
import LiveMap from './Componets/LiveMap';



const App = () =>{
  return (
    <div className='App'>
   
      
      <Hero/>
      <Home/>
      <About/>
      <Network/>
      <Exploring/>
      <Contact/>
      <Footer/>
     
     
    </div>
  )
}

export default App
