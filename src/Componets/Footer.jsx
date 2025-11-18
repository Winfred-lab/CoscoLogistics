import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    
      <div className="global-network" id='footer'>
        <h1 className="title">
          A Global Network,<br />Built to Deliver Anywhere
        </h1>
        <span className="status">● ACTIVE</span>

        <table className="network-table">
          <tbody>
            <tr>
              <td className="region">Asia-Pacific Hub</td>
              <td className="description">
                Manufacturing and export powerhouse, COSCO’s core shipping backbone.
              </td>
              <td className="stats">150+ ports & terminals</td>
            </tr>
            <tr>
              <td className="region">Europe & Med</td>
              <td className="description">
                Gateway to Western markets with deep rail-road-port integration.
              </td>
              <td className="stats">80+ ports & inland hubs</td>
            </tr>
            <tr>
              <td className="region">Americas</td>
              <td className="description">
                Extensive coverage from North to South, enabling full-scale integration.
              </td>
              <td className="stats">100+ ports & DCs</td>
            </tr>
            <tr>
              <td className="region">Middle East & Africa</td>
              <td className="description">
                Strategic link between Asia, Europe, and emerging economies.
              </td>
              <td className="stats">60+ logistics nodes</td>
            </tr>

            <tr className="highlight-row">
              <td className="region">North Asia</td>
              <td className="description">
                Dynamic trade routes supported by innovative logistics solutions.
              </td>
              <td className="stats">70+ ports & distribution centers</td>
            </tr>
            
            <tr>
              <td className="region">Southeast Asia</td>
              <td className="description">
                Vibrant regional trade network bolstered by emerging market potential.
              </td>
              <td className="stats">90+ ports & terminals</td>
            </tr>
            <tr>
              <td className="region">Central Europe</td>
              <td className="description">
                Hub for European distribution with advanced supply chain capabilities.
              </td>
              <td className="stats">40+ logistics hubs & connections</td>
            </tr>
            <tr>
              <td className="region">Latin America</td>
              <td className="description">
                Growing trade corridors with a focus on sustainability and efficiency.
              </td>
              <td className="stats">30+ ports & transit points</td>
            </tr>
          </tbody>
        </table>

        {/* footer */}
        <footer className="cosco-footer">
        <hr />
          <div className="footer-content">
            <div className="footer-main">

              <div className="footer-description">
                <div><h1>COSCO<span>.</span></h1></div>
                <div><p><span>COSCO</span> is a global leader in integrated logistics and maritime transportation, connecting economies across continents with reliability, innovation, and scale.</p></div>
              </div>
              
              <hr />
              <div className="footer-contact">
                <div>
                  <p>Innovar the potency of <br />COSCO at</p>
                  <h3 className="phone">+01235 235-02-53</h3>
                  <h2 className="email">Info@Coscologistic.com</h2>
                </div>

                <div className='started'>
                  <h2>Get Started</h2>
                  <p>On</p>
                </div>
              </div>
              <hr />
            </div>
            
            <div className="footer-links">
              <div className="link-column">
                <h4><a href="#">Service</a></h4>
                <h4><a href="#">Contact Us</a></h4>
                <h4><a href="#">News</a></h4>
              </div>

              <div className="link-column">
                <h4>Office</h4>
                <p>SSI Leone Shores</p>
                <p>Explained</p>
                <p>Status</p>
              </div>
            </div>
            
            <div className="footer-brand">
              <p>COSCO/SOCI Logistic for All Approveders</p>

              <div className="footer-legal">
                <p>Terms & Policy</p>
              </div>
            </div>  
              
              <div className="footer-work">
                <p>LET'S WORK TOGETHER</p>
              </div>     
          </div>
        </footer>
      </div>
  );
};



export default Footer