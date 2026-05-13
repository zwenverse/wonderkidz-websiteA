import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    concern: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form will be handled by Netlify Forms
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(03) 9369 1742',
      action: 'tel:0393691742'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@wonderkidz.com.au',
      action: 'mailto:hello@wonderkidz.com.au'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Main Street, Tarneit VIC 3029',
      action: 'https://maps.google.com/?q=123+Main+Street+Tarneit+VIC+3029'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 8:30am - 5:30pm',
      action: null
    }
  ];

  const faqs = [
    {
      question: 'Do you accept NDIS funding?',
      answer: 'Yes! We are a registered NDIS provider and work with plan-managed, self-managed, and agency-managed participants.'
    },
    {
      question: 'What age groups do you work with?',
      answer: 'We support children and adolescents from birth to 18 years across all our services.'
    },
    {
      question: 'How long are sessions?',
      answer: 'Session length varies by service and child needs, typically ranging from 45-60 minutes. We\'ll discuss this during your initial consultation.'
    },
    {
      question: 'Do you offer telehealth?',
      answer: 'Yes! We offer telehealth appointments for suitable services. This can be a great option for follow-ups, parent coaching, and certain types of therapy.'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="contact-hero-subtitle">
            Ready to take the first step? We're here to answer your questions and help you get started.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p className="form-description">
                Fill out the form below and we'll get back to you within 1 business day.
              </p>
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="childAge">Child's Age</label>
                    <input
                      type="text"
                      id="childAge"
                      name="childAge"
                      placeholder="e.g., 5 years old"
                      value={formData.childAge}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="concern">What brings you here? *</label>
                  <select
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="speech">Speech & Language Pathology</option>
                    <option value="psychology">Psychology</option>
                    <option value="ot">Occupational Therapy</option>
                    <option value="art">Art Therapy</option>
                    <option value="school-ready">School Ready Rockets Program</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Tell us more *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your child's needs, any concerns, or questions you have..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-large">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information Sidebar */}
            <div className="contact-info-sidebar">
              <h3>Contact Information</h3>
              <div className="contact-info-cards">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-card">
                    <item.icon size={24} className="contact-info-icon" />
                    <div>
                      <h4>{item.title}</h4>
                      {item.action ? (
                        <a href={item.action} className="contact-link">
                          {item.details}
                        </a>
                      ) : (
                        <p>{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="sidebar-cta">
                <h4>Prefer to call?</h4>
                <p>Our friendly team is ready to answer your questions.</p>
                <a href="tel:0393691742" className="btn btn-secondary btn-small">
                  <Phone size={18} />
                  Call (03) 9369 1742
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="Wonderkidz Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8887147676857!2d144.67934!3d-37.84833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUwJzU0LjAiUyAxNDTCsDQwJzQ1LjYiRQ!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
