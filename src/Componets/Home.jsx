import React from 'react';
import './Home.css'
import HomeImage from '../assets/image 9.png';
import HomeImg1 from '../assets/Frame 13.png';
import HomeImg2 from '../assets/Frame 14.png';
import HomeImg3 from '../assets/Frame 15.png';
import HomeImg4 from '../assets/Frame 17.png';



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
                <p>YEARS EXPERIENCES </p>
                <h1>20+</h1>
            </div>

            <div>
                <p>ACTIVE VESSELS WORLDWIDE </p>
                <h1>500+</h1>
            </div>

            <div>
                <p>ON-TIME DELIVERY RATE</p>
                <h1>99.1%</h1>
            </div>

            <div>
                <p>COUNTRIES COVERED</p>
                <h1>120+</h1>
            </div>

            <div>
                <p>TETUS TRANSPORTED ANNUALLY</p>
                <h1>25M+</h1>
            </div>

            <div>
                <p>GLOBAL PORT SERVED</p>
                <h1>200+</h1>
            </div>
        </div>


        <div className='content-image'>
            <div>
                <img src={HomeImg1} alt="" width={430}/>
            </div>

            <div>
                <img src={HomeImg2} alt="" width={430}/>
            </div>

            <div>
                <img src={HomeImg3} alt="" width={430}/>
            </div>
        </div>

        <div className='content-text'>
            <div>
                <h1>Seamless Global</h1>
                <h1 className='solutions'>-Logistics Solutions</h1>
                <p className='supplychain'>For over 20 years, COSCO has been powering supply chains with efficient, reliable, and scalable logistics services worldwide. </p>
            </div>

            <div>
                <p className='cosco'>COSCO is a global logistics company specializing in ocean freight, inland transport, warehousing, and integrated supply chain solutions. With a worldwide network and smart technology, we help businesses grow across borders with speed and efficiency.</p>
                <div className='user'>
                    <div>
                        <img src={HomeImg4} alt="" width={120}/>
                    </div>
                    <p>12k+  <br />happy clients</p>
                </div>
                <p className='create'>Create experience with COSCO and efficient service.</p>

                <div className='review'>
                    <p>45⭐</p>
                    <p>Guest’s Review</p>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Home