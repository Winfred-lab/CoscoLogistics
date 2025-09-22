import React from 'react';
import './About.css'
import AboutImage1 from '../assets/vector 1.png';
import AboutImage2 from '../assets/image.png';
import AboutImage3 from '../assets/image (1).png';
import AboutImage4 from '../assets/Frame 48.png';

const About = () => {
  return (
    
    <div className="About" id="about">
      <div className='about-content'>
        <h1>COSCO</h1>
        <p>At COSCO, <span>we don’t just move cargo — we move </span>global <br /> commerce <span>with </span>precision, scale, <span>and </span>trust. <br />
        <span>Backed by decades of experience and a powerful global <br /> network, we connect</span> continents, empower businesses,<span><br /> and </span> deliver with unwavering reliability.</p>
      </div>

      <div className='tailored'>
        <div className='tailored-content'>
          <div>
            <h1>Tailored Logistics Services</h1>
            <h1 className='fit'>to Fit Your Business</h1>
            <p className='global'>COSCO is a global logistics company specializing in ocean freight, inland transport, <br /> warehousing, and integrated supply chain solutions. 
              With a worldwide network and smart <br /> technology, we help businesses grow across borders with speed and efficiency.</p>
          </div>
          <div>
              <img className='AboutImage1' src={AboutImage1} alt="" />
          </div>
        </div>

        <div className='content-image'>
            <div>
              <img src={AboutImage2} alt="" width={430}/>
            </div>
          
            <div>
              <img src={AboutImage3} alt="" width={430}/>
            </div>
          
            <div>
              <img src={AboutImage4} alt="" width={430}/>
            </div>
        </div>
      </div>      
    </div>
  );
}

export default About;
