import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = ['Home', 'About', 'Services', 'Contact', 'Login'];

  return (
    <nav className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <img
                src="https://st2.depositphotos.com/5142301/8664/v/450/depositphotos_86646720-stock-illustration-v-letter-colorful-logo-in.jpg"
                alt="Vedhanthi Tech Logo"
              />
            </div>
            <div className="logo-text">Vedhanthi Tech</div>
          </div>

          <div className="nav-desktop">
            <div className="nav-links">
              {navigationItems.map((item) => {
                const path = `/${item.toLowerCase()}`;
                const isActive = location.pathname === path || (path === '/home' && location.pathname === '/');
                return (
                  <Link
                    key={item}
                    to={path === '/home' ? '/' : path}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="nav-mobile">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navigationItems.map((item) => {
              const path = `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  to={path === '/home' ? '/' : path}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
