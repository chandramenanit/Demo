import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="https://st2.depositphotos.com/5142301/8664/v/450/depositphotos_86646720-stock-illustration-v-letter-colorful-logo-in.jpg"
            alt="Vedhanthi Tech Logo"
            className="footer-logo"
          />
          <h3 className="footer-title">Vedhanthi Tech</h3>
          <p className="footer-description">
            Empowering businesses with modern tech solutions and digital excellence.
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><Mail size={18} className="icon" /> vedhanthitech@gmail.com</li>
            <li><Phone size={18} className="icon" /> +91 93456 40737</li>
            <li><MapPin size={18} className="icon" /> Coimbatore, Tamil Nadu</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vedhanthi Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
