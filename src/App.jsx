import React from 'react';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import About from './Componets/About';
import Network from './Componets/Network';
import Contact from './Componets/Contact';
import Exploring from './Componets/Exploring';
import Footer from './Componets/Footer';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Network/>
      <Contact/>
      <Exploring/>
      <Footer/>
    </div>
  );
}

export default App;
