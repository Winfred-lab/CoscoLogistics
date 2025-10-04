import React from 'react'
import HeroImage from '../assets/image 9.png';
import HeroImage19 from '../assets/homeimg.jpg';
import './Hero.css'

const Hero = () => {
  return (
    <div>
        <div className='Header1'>
            <img className='heroimage19' src={HeroImage19} alt="" /> 
        </div>
        
        <section className="hero">
            <h1>Fast, Reliable, and Affordable Logistics Solutions</h1>
            <p>We make shipping and delivery seamless — from warehousing to last-mile delivery, trust us to move your business forward.</p>
            {/* <button className="cta">Tracking ID</button> */}
           <a href=""><button className="cta ct">Get Quote</button></a>
        </section>

        function GetQuote () {
          
        }
        
        
    </div>
  )
}

export default Hero
