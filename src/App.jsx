import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Login from './Login/Login';
import Contact from './Contact/Contact';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home scrollToSection={scrollToSection} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
