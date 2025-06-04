import { ArrowRight, Code, Users, Award, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Home.css';

const Home = ({ scrollToSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: '0s', position: { top: '20%', left: '10%' } },
    { Icon: Users, delay: '0.5s', position: { top: '60%', left: '15%' } },
    { Icon: Award, delay: '1s', position: { top: '30%', right: '20%' } },
    { Icon: Target, delay: '1.5s', position: { top: '70%', right: '10%' } },
  ];

  return (
    <section className="hero-section">
      {/* Animated Background */}
      <div className="hero-bg-container">
        {/* Dynamic Gradient Orbs */}
        <div 
          className="gradient-orb orb-1"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="gradient-orb orb-2"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
        <div 
          className="gradient-orb orb-3"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        ></div>

        {/* Floating Particles */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="floating-icons">
          {floatingIcons.map(({ Icon, delay, position }, index) => (
            <div
              key={index}
              className="floating-icon"
              style={{
                ...position,
                animationDelay: delay,
              }}
            >
              <Icon size={24} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-wrapper">
        <div className={`hero-text-block ${isVisible ? 'animate-in' : ''}`}>
          <div className="text-reveal-wrapper">
            <h1 className="main-heading">
              <span className="word-reveal">Empowering</span>{' '}
              <span className="word-reveal highlight">Future Techies</span>
            </h1>
          </div>
          
          <p className="subheading slide-up">
            Join the best software training institute and boost your career with real-time projects,
            expert mentors, and industry-oriented curriculum.
          </p>
          
          <div className="action-buttons slide-up">
            <button
              className="primary-btn magnetic-btn"
              onClick={() => scrollToSection && scrollToSection('about')}
            >
              <span className="btn-text">Explore Courses</span>
              <ArrowRight className="btn-icon" />
              <div className="btn-shine"></div>
            </button>
            <button
              className="secondary-btn pulse-btn"
              onClick={() => scrollToSection && scrollToSection('contact')}
            >
              <span className="btn-text">Contact Us</span>
              <div className="ripple-effect"></div>
            </button>
          </div>

          {/* Stats Animation */}
          <div className="stats-row slide-up">
            <div className="stat-item">
              <div className="stat-number counter" data-target="500">0</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number counter" data-target="95">0</div>
              <div className="stat-label">% Job Placement</div>
            </div>
            <div className="stat-item">
              <div className="stat-number counter" data-target="50">0</div>
              <div className="stat-label">Expert Mentors</div>
            </div>
          </div>
        </div>

        <div className={`hero-image-block ${isVisible ? 'animate-in' : ''}`}>
          <div className="image-container">
            <div className="image-frame">
              <img
                src="https://img.freepik.com/free-photo/successful-business-group-working_1098-3306.jpg"
                alt="Training Institute"
                className="hero-main-image"
              />
              
              {/* Floating Elements around Image */}
              <div className="floating-badge badge-1">
                <Award size={16} />
                <span>Expert Training</span>
              </div>
              <div className="floating-badge badge-2">
                <Users size={16} />
                <span>500+ Students</span>
              </div>
              <div className="floating-badge badge-3">
                <Target size={16} />
                <span>95% Placement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
       </section>
  );
};

export default Home;