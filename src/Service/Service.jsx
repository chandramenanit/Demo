import  { useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  Camera, 
  Users, 
  Gift, 
  Star,
  ArrowRight,
  Zap
} from 'lucide-react';
import './Service.css';

const Service = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const services = [
    {
      id: 1,
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete wedding coordination from dream to reality with personalized touches that make your day unforgettable.",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Event Design",
      description: "Creative event styling and decoration that transforms venues into magical spaces tailored to your vision.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: Camera,
      title: "Photography",
      description: "Professional photography services capturing precious moments with artistic flair and emotional depth.",
      color: "from-rose-500 to-pink-600"
    },
    {
      id: 4,
      icon: Users,
      title: "Corporate Events",
      description: "Executive-level corporate event management ensuring seamless professional gatherings and conferences.",
      color: "from-pink-600 to-purple-500"
    },
    {
      id: 5,
      icon: Gift,
      title: "Party Planning",
      description: "Memorable celebrations for birthdays, anniversaries, and special occasions with creative themes.",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 6,
      icon: Star,
      title: "Luxury Services",
      description: "Premium event experiences with exclusive venues, gourmet catering, and white-glove service.",
      color: "from-rose-600 to-purple-600"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      services.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="services-showcase">
      {/* Animated Background Elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-heart heart-1">💕</div>
        <div className="floating-heart heart-2">✨</div>
        <div className="floating-heart heart-3">🌸</div>
      </div>

      <div className="custom-container">
        {/* Enhanced Header */}
        <div className="custom-header">
          <div className="title-wrapper">
            <h2 className="custom-title">
              Our Premium Services
              <div className="title-underline"></div>
            </h2>
          </div>
          <p className="custom-subtitle">
            Transforming your special moments into extraordinary memories with our 
            comprehensive event management and creative services
          </p>
          <div className="header-decoration">
            <Zap className="lightning-icon" />
          </div>
        </div>

        {/* Enhanced Grid */}
        <div className="custom-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div 
                key={service.id}
                className={`service-card ${isVisible ? 'card-visible' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-inner">
                  <div className="card-glow"></div>
                  
                  {/* Animated Icon */}
                  <div className={`icon-container bg-gradient-to-r ${service.color}`}>
                    <IconComponent className="service-icon" />
                    <div className="icon-pulse"></div>
                  </div>

                  {/* Content */}
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-desc">{service.description}</p>

                  {/* Hover Button */}
                  <div className="card-button">
                    <span>Learn More</span>
                    <ArrowRight className="button-arrow" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="card-sparkle sparkle-1">✨</div>
                  <div className="card-sparkle sparkle-2">⭐</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        </div>
  );
};

export default Service;