import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import Team from './Team.jsx';
import Contact from './Contact.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', page: 'home' },
    { name: 'Our Team', page: 'team' },
    { name: 'Contact', page: 'contact' },
  ];

  const services = [
    {
      title: 'Speech & Language Pathology',
      description: 'Supporting children with articulation, language development, stuttering, social communication, and feeding difficulties.',
      icon: '🗣️'
    },
    {
      title: 'Psychology',
      description: 'Evidence-based support for anxiety, ADHD, autism, emotional regulation, and behavioural challenges.',
      icon: '🧠'
    },
    {
      title: 'Occupational Therapy',
      description: 'Helping children develop fine motor skills, sensory processing, self-care abilities, and school readiness.',
      icon: '✋'
    },
    {
      title: 'Art Therapy',
      description: 'Creative, non-verbal therapy to support emotional expression, trauma processing, and self-discovery.',
      icon: '🎨'
    }
  ];

  const featuredTeam = [
    {
      name: 'Sarah Johnson',
      role: 'Speech Pathologist',
      credentials: 'BSpPath (Hons), CPSP',
      specialty: 'Early intervention & autism',
      emoji: '👩‍⚕️'
    },
    {
      name: 'Michael Chen',
      role: 'Psychologist',
      credentials: 'MPsych (Clinical), MAPS',
      specialty: 'ADHD & anxiety',
      emoji: '👨‍⚕️'
    },
    {
      name: 'Emma Williams',
      role: 'Occupational Therapist',
      credentials: 'BOccThy, MOT',
      specialty: 'Sensory processing',
      emoji: '👩‍⚕️'
    }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="hero">
              <div className="container">
                <div className="hero-content">
                  <h1 className="hero-title">
                    Evidence-Based Paediatric Services in <span className="highlight">Tarneit</span>
                  </h1>
                  <p className="hero-subtitle">
                    Supporting children and families through speech pathology, psychology, occupational therapy, and allied health services.
                  </p>
                  <div className="hero-buttons">
                    <button className="btn btn-primary" onClick={() => setCurrentPage('contact')}>
                      Book a Consultation
                    </button>
                    <button className="btn btn-secondary" onClick={() => setCurrentPage('team')}>
                      Meet Our Team
                    </button>
                  </div>
                </div>
                <div className="hero-image">
                  <div className="hero-image-placeholder">🏥</div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="section-light">
              <div className="container">
                <div className="section-header">
                  <span className="section-label">About Wonderkidz</span>
                  <h2>Where Growth Happens Naturally</h2>
                  <p className="section-description">
                    We're a multidisciplinary team of passionate paediatric clinicians who believe every child deserves support that feels less like therapy and more like play.
                  </p>
                </div>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">🎯</div>
                    <h3>Evidence-Based Practice</h3>
                    <p>Every intervention is grounded in research and tailored to your child's unique needs.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">👨‍👩‍👧‍👦</div>
                    <h3>Family-Centered Care</h3>
                    <p>We work alongside parents and carers, empowering you with strategies that work at home.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🌟</div>
                    <h3>Multidisciplinary Team</h3>
                    <p>Our clinicians collaborate across disciplines to provide holistic, coordinated care.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🏠</div>
                    <h3>Flexible Service Delivery</h3>
                    <p>Clinic-based, home visits, telehealth, and school support - whatever works for your family.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Who We Help Section */}
            <section className="section-white">
              <div className="container">
                <div className="section-header">
                  <h2>Who We Help</h2>
                  <p className="section-description">
                    We support children and adolescents (0-18 years) experiencing a wide range of developmental, learning, and emotional challenges.
                  </p>
                </div>
                <div className="help-grid">
                  <div className="help-category">
                    <h3>Speech & Language</h3>
                    <ul>
                      <li>Delayed speech development</li>
                      <li>Articulation difficulties</li>
                      <li>Language comprehension</li>
                      <li>Stuttering & fluency</li>
                      <li>Social communication</li>
                      <li>Feeding & swallowing</li>
                    </ul>
                  </div>
                  <div className="help-category">
                    <h3>Psychological</h3>
                    <ul>
                      <li>Anxiety & worry</li>
                      <li>ADHD assessment & support</li>
                      <li>Autism assessment</li>
                      <li>Emotional regulation</li>
                      <li>Behavioural challenges</li>
                      <li>School refusal</li>
                    </ul>
                  </div>
                  <div className="help-category">
                    <h3>Occupational Therapy</h3>
                    <ul>
                      <li>Fine motor delays</li>
                      <li>Sensory processing</li>
                      <li>Handwriting difficulties</li>
                      <li>Self-care skills</li>
                      <li>School readiness</li>
                      <li>Motor planning</li>
                    </ul>
                  </div>
                  <div className="help-category">
                    <h3>General Concerns</h3>
                    <ul>
                      <li>Developmental delays</li>
                      <li>Learning difficulties</li>
                      <li>Autism spectrum</li>
                      <li>Trauma & grief</li>
                      <li>Social skills</li>
                      <li>School transitions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="section-light">
              <div className="container">
                <div className="section-header">
                  <span className="section-label">Our Services</span>
                  <h2>Comprehensive Support for Every Child</h2>
                </div>
                <div className="services-grid">
                  {services.map((service, index) => (
                    <div key={index} className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Team Section */}
            <section className="section-white">
              <div className="container">
                <div className="section-header">
                  <span className="section-label">Our Clinicians</span>
                  <h2>Meet Some of Our Expert Team</h2>
                  <p className="section-description">
                    Our multidisciplinary team brings decades of combined experience in paediatric therapy.
                  </p>
                </div>
                <div className="team-preview-grid">
                  {featuredTeam.map((member, index) => (
                    <div key={index} className="team-preview-card">
                      <div className="team-avatar">{member.emoji}</div>
                      <h3>{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                      <p className="team-credentials">{member.credentials}</p>
                      <p className="team-specialty">Specialty: {member.specialty}</p>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                  <button className="btn btn-primary" onClick={() => setCurrentPage('team')}>
                    View Full Team <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </section>

            {/* School Ready Rockets CTA */}
            <section className="cta-section">
              <div className="container">
                <div className="cta-content">
                  <h2>🚀 School Ready Rockets Program</h2>
                  <p>
                    Our flagship pre-school readiness program helps 3-5 year olds develop the skills they need to thrive in kindergarten and beyond.
                  </p>
                  <button className="btn btn-white" onClick={() => setCurrentPage('contact')}>
                    Learn More & Enroll
                  </button>
                </div>
              </div>
            </section>

            {/* Contact Preview Section */}
            <section className="section-light">
              <div className="container">
                <div className="section-header">
                  <h2>Ready to Get Started?</h2>
                  <p className="section-description">
                    We're here to help your child reach their full potential. Get in touch today.
                  </p>
                </div>
                <div className="contact-preview-grid">
                  <div className="contact-preview-card">
                    <Phone size={32} />
                    <h3>Call Us</h3>
                    <p>(03) 9369 1742</p>
                  </div>
                  <div className="contact-preview-card">
                    <Mail size={32} />
                    <h3>Email Us</h3>
                    <p>hello@wonderkidz.com.au</p>
                  </div>
                  <div className="contact-preview-card">
                    <MapPin size={32} />
                    <h3>Visit Us</h3>
                    <p>123 Main Street, Tarneit VIC 3029</p>
                  </div>
                  <div className="contact-preview-card">
                    <Clock size={32} />
                    <h3>Hours</h3>
                    <p>Mon-Fri: 8:30am - 5:30pm</p>
                  </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                  <button className="btn btn-primary" onClick={() => setCurrentPage('contact')}>
                    Get in Touch
                  </button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-emoji">🌟</span>
              <span className="logo-text">Wonderkidz</span>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links">
              {navigation.map((item) => (
                <button
                  key={item.page}
                  className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
              <button className="btn btn-primary btn-sm" onClick={() => setCurrentPage('contact')}>
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="mobile-nav">
              {navigation.map((item) => (
                <button
                  key={item.page}
                  className={`mobile-nav-link ${currentPage === item.page ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
              <button 
                className="btn btn-primary btn-sm" 
                onClick={() => {
                  setCurrentPage('contact');
                  setMobileMenuOpen(false);
                }}
                style={{ marginTop: '1rem' }}
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <span className="logo-emoji">🌟</span>
                <span className="logo-text">Wonderkidz</span>
              </div>
              <p style={{ marginTop: '1rem', color: 'var(--color-text-secondary)' }}>
                Evidence-based paediatric services for children and families in Tarneit and surrounding areas.
              </p>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p><Phone size={16} /> (03) 9369 1742</p>
              <p><Mail size={16} /> hello@wonderkidz.com.au</p>
              <p><MapPin size={16} /> 123 Main Street, Tarneit VIC 3029</p>
            </div>
            <div className="footer-section">
              <h3>Hours</h3>
              <p>Monday - Friday</p>
              <p>8:30am - 5:30pm</p>
              <p>Closed weekends & public holidays</p>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <p>Speech Pathology</p>
              <p>Psychology</p>
              <p>Occupational Therapy</p>
              <p>Art Therapy</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Wonderkidz Paediatric Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
