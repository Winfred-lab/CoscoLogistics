import React from 'react'

const LiveMap = () => {
  return (
    <div className="map-container">
      <h2>📍 Live Location Map</h2>

      <div className="map-box">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31518.255884376034!2d3.3475997!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1aa43d6e6f%3A0x4f6a6e941ed97e76!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1696526927754!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LiveMap;
