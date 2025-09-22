import React from 'react';
import './Network.css'
import NetworkImage from '../assets/image11.png';
import NetworkImage1 from '../assets/image (2).png';
import NetworkImage2 from '../assets/Vector 1.png';

import NetworkImage11 from '../assets/Vector 1.svg'
import NetworkImage5 from '../assets/Vector 1.svg'
import NetworkImage6 from '../assets/Rectangle 1.svg'
import NetworkImage7 from '../assets/OBJECT.svg'
import NetworkImage8 from '../assets/Layer_12.svg'
import NetworkImage9 from '../assets/Layer_1 (1).svg'
import NetworkImage0 from '../assets/Capa_1.svg'

const Network = () => {
  return (
    
    <div className='Network' id='network'>
        
      <div className='Network-content'>
        <div className='NetworkImage' style={{ NetworkImage: `url(${NetworkImage})`}}></div>
          <h1>A Global Logistics Network <img src={NetworkImage6} alt="" /><br /> <img src={NetworkImage6} alt="" />You Can Rely On</h1>
          <p>Our extensive network spans over 120 countries, ensuring your goods reach <br />their destination- safely, swifty and reliably.</p>
          <button>More info <img src={NetworkImage11} alt="" /></button>
      </div>

      <div className='Network-content1'>
        <div>
          <h4>WHY CHOOSE COSCO</h4>
          <img src={NetworkImage1} alt="" />
        </div>

        <div className='Network-content2'>
          <h1>With COSCO, <span>you're not just choosing a <br />carrier - you're choosing </span>a logistics partner built <br />for the future</h1>
          <div className='GetStarted'>
            <p>Get Started</p>
            <img className='NetworkImage2' src={NetworkImage5} alt="" />
          </div>
          <hr />

          <div className='Networkgrid'>
              <div>
                <img className='NetworkImage2' src={NetworkImage8} alt="" />
                <h3>Decades of Expertise</h3>
                <p>20+ years navigating global logistics challenges</p>
              </div>

              <div>
                <img className='NetworkImage2' src={NetworkImage0} alt="" />
                <h3>Always-On support</h3>
                <p>24/7 multilingual assistance across time zones</p>
              </div>

              <div>
                <img className='NetworkImage2' src={NetworkImage9} alt="" />
                <h3>Tailored LOgistics Solutions</h3>
                <p>Flexible option for SMEs to global enterprises</p>
              </div>

              <div>
                <img className='NetworkImage2' src={NetworkImage7} alt="" />
                <h3>Comptitive pricing</h3>
                <p>Optimkized cost efficiency without comprominising speed</p>
              </div>

          </div>
        </div>
        
        
      </div>
    </div>
  );    
}

export default Network;
