import React, { useState, useEffect } from 'react';
import '../styles/ForgeFitness.css';

export default function ForgeFitness() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(id);
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo">FORGE</div>
        <ul className="nav-menu">
          <li><a onClick={() => scrollToSection('hero')} className={activeNav === 'hero' ? 'active' : ''}>Home</a></li>
          <li><a onClick={() => scrollToSection('services')} className={activeNav === 'services' ? 'active' : ''}>Services</a></li>
          <li><a onClick={() => scrollToSection('pricing')} className={activeNav === 'pricing' ? 'active' : ''}>Pricing</a></li>
          <li><a onClick={() => scrollToSection('contact')} className={activeNav === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
        <button className="nav-cta" onClick={() => scrollToSection('pricing')}>Join Now</button>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-content">
          <h1 className="hero-title">FORGE YOUR STRENGTH</h1>
          <p className="hero-subtitle">Discipline. Strength. Results.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('pricing')}>Join Today</button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('pricing')}>View Plans</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {/* Strength Training */}
          <div className="service-card">
            <img 
              src="https://images.unsplash.com/photo-1641337221253-fdc7237f6b61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Strength Training" 
              className="service-image"
            />
            <div className="service-content">
              <h3 className="service-title">Strength Training</h3>
              <p className="service-description">
                Build muscle, improve power, and increase overall athletic performance. Our expert trainers guide you through progressive training programs designed for maximum gains.
              </p>
            </div>
          </div>

          {/* Boxing */}
          <div className="service-card">
            <img 
              src="https://media.istockphoto.com/id/2171113804/photo/young-woman-with-boxing-gloves-punching-the-punching-bag-while-practicing-kickbox-in-the-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=GAU-9oRT1qUqd8xILRgeCktnvzdzMpaTZzSwsKHJ6_o=" 
              alt="Professional Boxing" 
              className="service-image"
            />
            <div className="service-content">
              <h3 className="service-title">Boxing</h3>
              <p className="service-description">
                Professional boxing training focused on endurance, speed, and technique. Develop cardiovascular strength and mental resilience through intense, controlled workouts.
              </p>
            </div>
          </div>

          {/* Personal Coaching */}
          <div className="service-card">
            <img 
              src="https://plus.unsplash.com/premium_photo-1672862927484-cfc92dd88081?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bSUyMHBlcnNvbmFsJTIwY29hY2hpbmd8ZW58MHx8MHx8fDA%3D" 
              alt="Personal Coaching" 
              className="service-image"
            />
            <div className="service-content">
              <h3 className="service-title">Personal Coaching</h3>
              <p className="service-description">
                Customized workout plans and one-on-one guidance tailored to your specific goals. Get personalized attention from certified coaches who understand your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <h2 className="section-title">Membership Plans</h2>
        <div className="pricing-grid">
          {/* Basic Plan */}
          <div className="price-card">
            <div className="price-name">Basic</div>
            <div className="price-amount">₹<span>1,999</span></div>
            <div className="price-period">/month</div>
            <ul className="price-features">
              <li>Gym Access</li>
              <li>Strength Training</li>
              <li>Locker Access</li>
            </ul>
            <button className="btn btn-secondary">Choose Plan</button>
          </div>

          {/* Premium Plan */}
          <div className="price-card">
            <div className="price-name">Premium</div>
            <div className="price-amount">₹<span>2,499</span></div>
            <div className="price-period">/month</div>
            <ul className="price-features">
              <li>Strength Training</li>
              <li>Group Training</li>
              <li>Cardio Area</li>
              <li>Locker Access</li>
            </ul>
            <button className="btn btn-secondary">Choose Plan</button>
          </div>

          {/* Elite Coaching Plan */}
          <div className="price-card featured">
            <div className="price-badge">MOST POPULAR</div>
            <div className="price-name">Elite Coaching</div>
            <div className="price-amount">₹<span>3,000</span></div>
            <div className="price-period">/month</div>
            <ul className="price-features">
              <li>Dedicated Trainer</li>
              <li>Nutrition Guidance</li>
              <li>Personal Workout Plan</li>
              <li>Priority Support</li>
            </ul>
            <button className="btn btn-primary">Choose Plan</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="contact-heading">READY TO TRANSFORM?</h2>
        <div className="contact-container">
          <div className="contact-button">
            <button className="btn btn-primary">Schedule A Visit</button>
          </div>

          <div className="contact-grid">
            <div className="contact-item">
              <label className="contact-label">Gym Name</label>
              <p className="contact-value">Forge Fitness</p>
            </div>
            <div className="contact-item">
              <label className="contact-label">Address</label>
              <p className="contact-value">MVP Colony, Visakhapatnam</p>
            </div>
            <div className="contact-item">
              <label className="contact-label">Phone</label>
              <p className="contact-value"><a href="tel:+9198765432103" className="contact-link">+91 9876543210</a></p>
            </div>
            <div className="contact-item">
              <label className="contact-label">Email</label>
              <p className="contact-value"><a href="mailto:hello@forgefitness.com" className="contact-link">hello@forgefitness.com</a></p>
            </div>
            <div className="contact-item">
              <label className="contact-label">Working Hours</label>
              <p className="contact-value">
                Mon-Sat: 5 AM – 10 PM
                <span className="open-badge">OPEN</span>
              </p>
              <p style={{ color: '#B3B3B3', marginTop: '0.5rem' }}>Sunday: Closed</p>
            </div>
          </div>

          <div className="socials">
            <a href="#" className="social-link" title="Instagram">📷</a>
            <a href="#" className="social-link" title="Facebook">f</a>
            <a href="#" className="social-link" title="YouTube">▶</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p className="footer-text">Developed by Joshitha</p>
      </footer>
    </>
  );
}
