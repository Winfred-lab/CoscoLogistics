import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    
      <div className="global-network">
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
    </div>
  );
};



export default Footer