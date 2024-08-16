import React from 'react';
import './Login.css';
import tuduLogo from '../assets/images/tudu_icon.png';
import googleIcon from '../assets/images/google_icon.png';
import facebookIcon from '../assets/images/facebook_icon.png';

function Login() {
  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={tuduLogo} alt="TUDU Logo" />
      </div>
      <input type="text" placeholder="Email / Usuario" className="login-input" />
      <input type="password" placeholder="Contraseña" className="login-input" />
      <button className="login-button">Login</button>
      <div className="login-forgot-password">
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>
      <div className="login-social">
        <div className="social-icon">
          <img src={googleIcon} alt="Google Login" />
        </div>
        <div className="social-icon">
          <img src={facebookIcon} alt="Facebook Login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
