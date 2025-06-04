import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  Sparkles,
  ArrowUp,
  Send,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [emailHover, setEmailHover] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      {/* Animated Background Elements */}
      <div className="footer-bg-animation">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        
        <div className="floating-icons">
          <Heart className="floating-icon heart-1" />
          <Sparkles className="floating-icon sparkle-1" />
          <Zap className="floating-icon zap-1" />
          <Globe className="floating-icon globe-1" />
        </div>
        
        <div className="wave-container">
          <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z" className="wave-path-1"></path>
            <path d="M0,80 C300,140 900,20 1200,80 L1200,0 L0,0 Z" className="wave-path-2"></path>
          </svg>
        </div>
      </div>

      <div className={`footer-container ${isVisible ? 'container-visible' : ''}`}>
        {/* Brand Section */}
        <div className="footer-brand animate-slide-up">
          <div className="logo-container">
            <div className="logo-glow"></div>
            <img
              src="https://st2.depositphotos.com/5142301/8664/v/450/depositphotos_86646720-stock-illustration-v-letter-colorful-logo-in.jpg"
              alt="Vedhanthi Tech Logo"
              className="footer-logo"
            />
          </div>
          <h3 className="footer-title">
            Vedhanthi Tech
            <div className="title-sparkle">✨</div>
          </h3>
          <p className="footer-description">
            Empowering businesses with modern tech solutions and digital excellence.
          </p>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <div className="social-icon">
              <Heart className="social-heart" />
            </div>
            <div className="social-icon">
              <Sparkles className="social-sparkle" />
            </div>
            <div className="social-icon">
              <Shield className="social-shield" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h4 className="section-title">
            Quick Links
            <div className="section-underline"></div>
          </h4>
          <ul>
            {['Home', 'About', 'Services', 'Contact', 'Login'].map((link, index) => (
              <li key={link} style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                <a href={`/${link.toLowerCase()}`} className="footer-link">
                  <ArrowUp className="link-arrow" />
                  {link}
                  <div className="link-glow"></div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact animate-slide-up" style={{animationDelay: '0.4s'}}>
          <h4 className="section-title">
            Contact Us
            <div className="section-underline"></div>
          </h4>
          <ul>
            <li className="contact-item" style={{animationDelay: '0.5s'}}>
              <div className="contact-icon-wrapper">
                <Mail className="contact-icon" />
                <div className="icon-pulse"></div>
              </div>
              <span 
                className={`contact-text ${emailHover ? 'text-glow' : ''}`}
                onMouseEnter={() => setEmailHover(true)}
                onMouseLeave={() => setEmailHover(false)}
              >
                vedhanthitech@gmail.com
              </span>
            </li>
            <li className="contact-item" style={{animationDelay: '0.6s'}}>
              <div className="contact-icon-wrapper">
                <Phone className="contact-icon" />
                <div className="icon-pulse"></div>
              </div>
              <span className="contact-text">+91 93456 40737</span>
            </li>
            <li className="contact-item" style={{animationDelay: '0.7s'}}>
              <div className="contact-icon-wrapper">
                <MapPin className="contact-icon" />
                <div className="icon-pulse"></div>
              </div>
              <span className="contact-text">Coimbatore, Tamil Nadu</span>
            </li>
          </ul>
          
          {/* Call-to-Action Button */}
          <div className="cta-button">
            <Send className="cta-icon" />
            <span>Get In Touch</span>
            <div className="button-ripple"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright-text">
            © {new Date().getFullYear()} Vedhanthi Tech. All rights reserved.
            <Heart className="copyright-heart" />
          </p>
          <div className="scroll-to-top" onClick={scrollToTop}>
            <ArrowUp className="scroll-arrow" />
          </div>
        </div>
      </div>
      </footer>
  );
};

export default Contact;
