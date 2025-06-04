import { Mail, Lock } from 'lucide-react';
import './Login.css';

const Login = () => {
  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Login to Vedhanthi Tech</h2>
        <p className="login-subtitle">Welcome back! Please enter your credentials.</p>

        <form className="login-form">
          <div className="input-group">
            <Mail className="input-icon" />
            <input
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="login-footer">
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
