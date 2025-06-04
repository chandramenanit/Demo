import { Users, Zap, Shield, Star, TrendingUp, Award } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <Users className="about-icon" />,
      title: "Collaborative Experts",
      description: "Our team thrives on collaboration and brings diverse expertise to solve complex challenges.",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Zap className="about-icon" />,
      title: "Lightning-Fast Execution",
      description: "We move fast, iterate quickly, and deliver ahead of deadlines without compromising quality.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: <Shield className="about-icon" />,
      title: "Trusted Partnerships",
      description: "We build long-term partnerships by offering secure, scalable, and dependable solutions.",
      color: "from-green-400 to-blue-500",
      bgColor: "bg-green-50"
    }
  ];

  const floatingElements = [
    { Icon: Star, position: { top: '15%', left: '10%' }, delay: '0s' },
    { Icon: TrendingUp, position: { top: '70%', left: '5%' }, delay: '1s' },
    { Icon: Award, position: { top: '20%', right: '8%' }, delay: '2s' },
    { Icon: Users, position: { bottom: '20%', right: '12%' }, delay: '0.5s' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-section">
      {/* Animated Background */}
      <div className="about-bg-container">
        {/* Dynamic Gradient Orbs */}
        <div 
          className="gradient-orb orb-1"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        ></div>
        <div 
          className="gradient-orb orb-2"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>

        {/* Floating Geometric Shapes */}
        <div className="geometric-shapes">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className={`geometric-shape shape-${i % 4}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        {/* Floating Icons */}
        <div className="floating-elements">
          {floatingElements.map(({ Icon, position, delay }, index) => (
            <div
              key={index}
              className="floating-element"
              style={{
                ...position,
                animationDelay: delay,
              }}
            >
              <Icon size={20} />
            </div>
          ))}
        </div>

        {/* Animated Lines */}
        <div className="connecting-lines">
          <svg className="line-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              className="animated-line"
              d="M10,50 Q50,10 90,50 T90,50"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 107, 107, 0.3)" />
                <stop offset="50%" stopColor="rgba(255, 217, 61, 0.3)" />
                <stop offset="100%" stopColor="rgba(78, 205, 196, 0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-container">
        <div className={`about-intro ${isVisible ? 'animate-in' : ''}`}>
          <div className="heading-wrapper">
            <h2 className="about-heading">
              <span className="word-reveal">Why</span>{' '}
              <span className="word-reveal highlight">Choose Us?</span>
            </h2>
            <div className="heading-underline"></div>
          </div>
          <p className="about-description slide-up">
            At Vedhanthi Tech, we don't just code — we craft digital experiences that scale your business.
          </p>

          {/* Stats Counter */}
          <div className="stats-showcase slide-up">
            <div className="stat-bubble">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-bubble">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-bubble">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>

        <div className={`about-grid ${isVisible ? 'animate-in' : ''}`}>
          {features.map((item, index) => (
            <div 
              className={`about-card card-${index}`}
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="about-icon-wrapper">
                  <div className="icon-bg-animation"></div>
                  {item.icon}
                  <div className="icon-pulse"></div>
                </div>
                <h3 className="about-card-title">{item.title}</h3>
                <p className="about-card-desc">{item.description}</p>
                
                {/* Card Decorations */}
                <div className="card-decoration-1"></div>
                <div className="card-decoration-2"></div>
              </div>
              
              {/* Hover Effects */}
              <div className="card-particles">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`card-particle particle-${i}`}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
  );
};

export default About;