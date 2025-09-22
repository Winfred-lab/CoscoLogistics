import React from 'react';
// import ReactDOM from 'react-dom/client';
import Home from './Componets/Home';
import About from './Componets/About';
import Network from './Componets/Network';
import Exploring from './Componets/Exploring';
import Contact from './Componets/Contact';
import Footer from './Componets/Footer';



const App = () =>{
  return (
    <div className='App'>
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
