
import React, { useState } from "react";
import "./Network.css";

import NetworkImage from "../assets/image11.png";
import NetworkImage1 from "../assets/image (2).png";
import NetworkImage2 from "../assets/Vector 1.png";
import NetworkImage11 from "../assets/Vector 1.svg";
import NetworkImage5 from "../assets/Vector 1.svg";
import NetworkImage6 from "../assets/Rectangle 1.svg";
import NetworkImage7 from "../assets/OBJECT.svg";
import NetworkImage8 from "../assets/Layer_12.svg";
import NetworkImage9 from "../assets/Layer_1 (1).svg";
import NetworkImage0 from "../assets/Capa_1.svg";

const Network = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="Network" id="network">
      {/* Section 1: Header */}
      <div className="Network-content">
        <h1>
          A Global Logistics Network <img src={NetworkImage6} alt="" />
          <br /> <img src={NetworkImage6} alt="" /> You Can Rely On
        </h1>
        <p>
          Our extensive network spans over 120 countries, ensuring your goods
          reach <br />
          their destination safely, swiftly and reliably.
        </p>

        <a href="" onClick={handleOpen}>
          <button>
            More info <img id="#" src={NetworkImage11} alt="" />
          </button>
        </a>
      </div>

      {/* Section 2: Why Choose COSCO */}
      <div className="Network-content1">
        <div>
          <h4>WHY CHOOSE COSCO</h4>
          <img src={NetworkImage1} alt="" />
        </div>

        <div className="Network-content2">
          <h1>
            With COSCO, <span>you're not just choosing a <br />carrier - you're choosing </span>
            a logistics partner built <br />for the future
          </h1>

          <div className="GetStarted">
            <p>Get Started</p>
            <img className="NetworkImage2" src={NetworkImage5} alt="" />
          </div>
          <hr />

          <div className="Networkgrid">
            <div>
              <img className="NetworkImage2" src={NetworkImage8} alt="" />
              <h3>Decades of Expertise</h3>
              <p>20+ years navigating global logistics challenges</p>
            </div>

            <div>
              <img className="NetworkImage2" src={NetworkImage0} alt="" />
              <h3>Always-On Support</h3>
              <p>24/7 multilingual assistance across time zones</p>
            </div>

            <div>
              <img className="NetworkImage2" src={NetworkImage9} alt="" />
              <h3>Tailored Logistics Solutions</h3>
              <p>Flexible options for SMEs to global enterprises</p>
            </div>

            <div>
              <img className="NetworkImage2" src={NetworkImage7} alt="" />
              <h3>Competitive Pricing</h3>
              <p>Optimized cost efficiency without compromising speed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClose}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>🌍 COSCO Global Network Details</h3>
            <p>
              COSCO operates one of the world’s largest logistics networks,
              connecting over 120 countries and major seaports.
            </p>

            <h4>🧭 Headquarters Coordinates</h4>
            <p>
              Latitude: <strong>31.2304° N</strong> <br />
              Longitude: <strong>121.4737° E</strong>
            </p>

            <h4>🏙️ Major Global Hubs</h4>
            <ul style={{ textAlign: "left", margin: "10px auto", width: "80%" }}>
              <li>Shanghai Port, China</li>
              <li>Lagos Port Complex, Nigeria</li>
              <li>Port of Singapore</li>
              <li>Rotterdam Port, Netherlands</li>
              <li>Los Angeles Port, USA</li>
            </ul>

            <h4>🗺️ Extended Map View</h4>
            <iframe
              title="COSCO Global Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31518.255884376034!2d3.3475997!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1aa43d6e6f%3A0x4f6a6e941ed97e76!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1696526927754!5m2!1sen!2sng"
              width="100%"
              height="200"
              style={{
                borderRadius: "10px",
                border: "none",
                marginTop: "10px",
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <button className="close1-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Network

