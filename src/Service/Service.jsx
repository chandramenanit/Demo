import { Smartphone, LayoutDashboard, TrendingUp, MessageSquare } from 'lucide-react';
import './Service.css';

const Service = () => {
  const services = [
    {
      icon: <Smartphone className="service-icon" />,
      title: "Mobile App Development",
      description: "Build sleek and responsive mobile apps for Android and iOS with seamless user experiences.",
    },
    {
      icon: <LayoutDashboard className="service-icon" />,
      title: "UI/UX Design",
      description: "Craft intuitive interfaces and engaging digital experiences for web and mobile platforms.",
    },
    {
      icon: <TrendingUp className="service-icon" />,
      title: "Business Analytics",
      description: "Leverage data-driven insights and custom dashboards to drive smart decisions.",
    },
    {
      icon: <MessageSquare className="service-icon" />,
      title: "Chatbot Integration",
      description: "Automate customer service and support using AI-powered chat solutions.",
    }
  ];

  return (
    <section id="services" className="custom-services-section">
      <div className="custom-container fade-in-left">
        <div className="custom-header">
          <h2 className="custom-title">What We Offer</h2>
          <p className="custom-subtitle">
            Empowering your brand with impactful digital services
          </p>
        </div>

        <div className="custom-grid">
          {services.map((service, index) => (
            <div key={index} className="custom-card">
              <div className="icon-box">
                {service.icon}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
