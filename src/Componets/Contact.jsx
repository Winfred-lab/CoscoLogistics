import React from 'react';
import './Contact.css'


const Contact = () => {
  return (
    <section className="faq-container" id='contact'>
      <h2 className="faq-title">
        Still have questions? <br /> <span>— We’ve got answers.</span>
      </h2>

      <div className="faq-list">
        <details open className="faq-item">
          <summary>
            <span className="faq-id">01</span>
            <span className="faq-question">
              What types of cargo does COSCO handle?
            </span>
          </summary>
          <p className="faq-answer">
            We handle a wide range of cargo including containerized goods, bulk
            commodities, refrigerated items, oversized machinery, and dangerous
            goods — all with industry-standard compliance.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            <span className="faq-id">02</span>
            <span className="faq-question">
              Does COSCO offer air freight in addition to sea logistics?
            </span>
          </summary>
          <p className="faq-answer">
            Yes, COSCO offers air freight in addition to its sea freight
            services. We provide logistics solutions that include air transport,
            which is useful for faster delivery of goods or time-sensitive
            shipments.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            <span className="faq-id">03</span>
            <span className="faq-question">How can I track my shipment?</span>
          </summary>
          <p className="faq-answer">
            You can track your shipment using COSCO’s online tracking system by
            entering your booking or container number.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            <span className="faq-id">04</span>
            <span className="faq-question">
              Is customs clearance included in your service?
            </span>
          </summary>
          <p className="faq-answer">
            Yes, customs clearance is part of our service to ensure smooth
            import and export processes.
          </p>
        </details>

        <details className="faq-item">
          <summary>
            <span className="faq-id">05</span>
            <span className="faq-question">
              What are the payment options available for shipping?
            </span>
          </summary>
          <p className="faq-answer">
            We accept multiple payment options including bank transfer, credit
            card, and invoicing depending on your package.
          </p>
        </details>
      </div>

      <div className="faq-footer">View more</div>
    </section>
  );
};

export default Contact;