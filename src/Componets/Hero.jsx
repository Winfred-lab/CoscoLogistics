import React, { useState } from "react";
import HeroImage19 from "../assets/homeimg.jpg";
import "./Hero.css";

const GetQuoteForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    weight: "",
    service: "road",
  });
  const [price, setPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const weight = parseFloat(formData.weight);
    const rates = { road: 2, air: 5, sea: 1 };

    if (!isNaN(weight) && weight > 0) {
      const total = weight * rates[formData.service];
      setPrice(total);
    } else {
      setPrice(null);
      alert("Please enter a valid weight");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2 className="form-title">🚚 Get a Quote</h2>

        <form onSubmit={handleSubmit} className="form-body">
          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            value={formData.pickup}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            required
          />
          <select name="service" value={formData.service} onChange={handleChange}>
            <option value="road">Road Freight</option>
            <option value="air">Air Freight</option>
            <option value="sea">Sea Freight</option>
          </select>
          <button type="submit" className="animated-btn">Request Quote</button>
        </form>

        {price !== null && (
          <div className="form-result slide-up">
            <p>
              Estimated Price: <strong>${price.toFixed(2)}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailPattern.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setSubmitted(true);
      alert("Message sent successfully 🎉");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2 className="form-title">📬 Contact Us</h2>
        <form onSubmit={handleSubmit} className="form-body">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Type your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit" className="animated-btn">Send Message</button>
          {submitted && <p className="success slide-up">✅ Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

const Hero = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <div className="Header1">
        <img className="heroimage19" src={HeroImage19} alt="Hero" />
      </div>

      <section className="hero">
        <h1>Fast, Reliable, and Affordable Logistics Solutions</h1>
        <p>
          We make shipping and delivery seamless — from warehousing to last-mile delivery,
          trust us to move your business forward.
        </p>

        <button className="cta ct" onClick={() => setShowQuote(true)}>
          Get Quote
        </button>
        <button className="cta ct" onClick={() => setShowContact(true)}>
          Contact Us
        </button>
      </section>

      {showQuote && <GetQuoteForm onClose={() => setShowQuote(false)} />}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </div>
  );
};

export default Hero;
