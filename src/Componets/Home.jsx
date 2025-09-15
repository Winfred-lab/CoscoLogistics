import React from 'react';
import './Home.css'
import HomeImage from '../assets/image 9.png';
import HomeImg1 from '../assets/Frame 13.png';
import HomeImg2 from '../assets/Frame 14.png';
import HomeImg3 from '../assets/Frame 15.png';



const Home = () => {
  return (
    <div className="Home">

        <div className='Header'>
            <img src={HomeImage} alt="" />
            <nav className="navbar">
                <ul className="links">
                    <li><a href="#home" className='CTA1'>Home</a></li>
                    <li><a href="#about" className='CTA2'>About Us</a></li>
                    <li><a href="#network" className='CTA2'>Global Network</a></li>
                    <li><a href="#home" className='CTA-main'>COSCO</a></li>
                    <li><a href="#contact" className='CTA4'>Contact</a></li>
                    <li><a href="#exploring" className='CTA5'>Start Exploring</a></li>
                </ul>
            </nav>
        </div>
        

        <div className="content-Number">
            <div>
                <p>years EXPERIENCES </p>
                <h1>20+</h1>
            </div>

            <div>
                <p>years EXPERIENCES </p>
                <h1>500+</h1>
            </div>

            <div>
                <p>years EXPERIENCES </p>
                <h1>99.1%</h1>
            </div>

            <div>
                <p>years EXPERIENCES </p>
                <h1>120+</h1>
            </div>

            <div>
                <p>years EXPERIENCES </p>
                <h1>25M+</h1>
            </div>

            <div>
                <p>years EXPERIENCES </p>
                <h1>200+</h1>
            </div>
        </div>


        <div className='content-image'>
            <div>
                <img src={HomeImg1} alt="" width={370}/>
            </div>

            <div>
                <img src={HomeImg2} alt="" width={370}/>
            </div>

            <div>
                <img src={HomeImg3} alt="" width={370}/>
            </div>
        </div>


    </div>
  );
}

export default Home;
