import { Users, Zap, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <Users className="about-icon" />,
      title: "Collaborative Experts",
      description: "Our team thrives on collaboration and brings diverse expertise to solve complex challenges."
    },
    {
      icon: <Zap className="about-icon" />,
      title: "Lightning-Fast Execution",
      description: "We move fast, iterate quickly, and deliver ahead of deadlines without compromising quality."
    },
    {
      icon: <Shield className="about-icon" />,
      title: "Trusted Partnerships",
      description: "We build long-term partnerships by offering secure, scalable, and dependable solutions."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-intro fade-in-left">
          <h2 className="about-heading"><span className="highlight">Why</span> Choose Us?</h2>
          <p className="about-description">
            At Vedhanthi Tech, we don't just code — we craft digital experiences that scale your business.
          </p>
        </div>

        <div className="about-grid fade-in-right">
          {features.map((item, index) => (
            <div className="about-card" key={index}>
              <div className="about-icon-wrapper">{item.icon}</div>
              <h3 className="about-card-title">{item.title}</h3>
              <p className="about-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
