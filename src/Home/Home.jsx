import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-shapes">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
      </div>

      <div className="hero-wrapper">
        <div className="hero-text-block fade-in-left">
          <h1 className="main-heading">
            Empowering <span className="highlight">Future Techies</span>
          </h1>
          <p className="subheading">
            Join the best software training institute and boost your career with real-time projects,
            expert mentors, and industry-oriented curriculum.
          </p>
          <div className="action-buttons">
            <button
              className="primary-btn"
              onClick={() => scrollToSection && scrollToSection('about')}
            >
              Explore Courses <ArrowRight className="icon" />
            </button>
            <button
              className="secondary-btn"
              onClick={() => scrollToSection && scrollToSection('contact')}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero-image-block fade-in-right">
          <img
            src="https://img.freepik.com/free-photo/successful-business-group-working_1098-3306.jpg"
            alt="Training Institute"
            className="hero-main-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
