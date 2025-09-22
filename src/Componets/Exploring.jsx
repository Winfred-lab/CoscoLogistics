import React from 'react';
import './Exploring.css'
import ExploringImage from '../assets/image (3).png'
import ExploringImage1 from '../assets/Frame.svg'
import ExploringImage2 from '../assets/bar-chart-11.svg'
import ExploringImage3 from '../assets/link-01.svg'
import ExploringImage4 from '../assets/phone-02.svg'
import ExploringImage5 from '../assets/Rectangle 1.svg'


const Exploring = () => {
  return (
    <div className='Exploring' id='Exploring'>
      <div className='Exporing-content'>
          <h1>Our Milestones <br /><span><img className='ExploringImage5' src={ExploringImage5} alt="" />& Achievements</span></h1>
      </div>
      <div className="content">
        <div className="contentA">

          <div className="content1">
            <div>
              <h1><span>01</span>Top 3 Global Shipping Company</h1>
            </div>
            <div>
              <p>Recognized as one of the world’s largest integrated logistics providers by container volume and global presence.</p>
            </div>
          </div>

          <hr />

          <div className="content1">
            <div>
              <h1><span>02</span>Smart Logistics Pioneer</h1>
            </div>
            <div>
              <p>Among the first to implement AI-driven route optimization and <br /> blockchain-enabled cargo tracking.</p>
            </div>
          </div>
        </div>

        <div className='smart-img'>
          <img className='smart-img1' src={ExploringImage} alt="" />
          <div className='smart-logistics'>
            <h2>Smart Logistics, <br />Smarter Future</h2>
            <p className='smart-p'>At COSCO, technology isn’t an add-on — it’s the core of how we move faster, safer, and smarter. From AI to blockchain, we continuously evolve to lead the future of global logistics.</p>
            <p className='smart-p-img'><img src={ExploringImage1} alt=""/>AI-Powered Route Optimization <br />
              <img src={ExploringImage3} alt="" /> Blockchain-Backed Cargo Tracking <br />
              <img src={ExploringImage4} alt="" /> Smart Port Integration <br />
              <img src={ExploringImage2} alt="" /> Predictive Analytics for Demand Forecasting</p>
          </div>
        </div>
        
        <div className="contentB">
          <div className="content1">
            <h1><span>03</span>21 Million+ TEUs Handled Annually</h1>  
            <div>
              <p>Efficiently moving millions of containers across seas and borders, fueling <br /> international trade.</p>
            </div>
          </div>
          <hr />
          <div className="content1">
            <h1><span>04</span>Sustainability Leadership</h1>
            <div>
              <p>Awarded for green shipping initiatives and fleet upgrades aimed at <br />reducing carbon emissions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exploring;
