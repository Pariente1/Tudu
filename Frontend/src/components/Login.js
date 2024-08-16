import React, { useState } from 'react';
import './Login.css';
import tuduLogo from '../assets/images/tudu_icon.png';
import googleIcon from '../assets/images/google_icon.png';
import facebookIcon from '../assets/images/facebook_icon.png';
import axios from 'axios';

function Login() {
  // Estados para los campos de entrada y el mensaje
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    try {
      // Solicitud GET para verificar que la API está funcionando
      const response = await axios.get('https://restserver-production-4562.up.railway.app');
      
      // Verificar si el código de estado es 200
      if (response.status === 200) {
        setMessage('API está funcionando correctamente. Código 200 recibido.');
      } else {
        setMessage(`Código de estado inesperado: ${response.status}`);
      }

      // Solicitud POST para el inicio de sesión
      // Puedes comentar esta parte si solo quieres probar la solicitud GET
      
      /*
      const loginResponse = await axios.post('https://restserver-production-4562.up.railway.app/login', {
         email: email,
         password: password
       });
      
      
       // Aquí puedes manejar la respuesta del inicio de sesión
       console.log('Respuesta del servidor:', loginResponse.data);
       */

    } catch (error) {
      setMessage('Error al conectarse a la API. Verifica la URL y el servidor.');
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={tuduLogo} alt="TUDU Logo" />
      </div>
      <input
        type="text"
        placeholder="Email / Usuario"
        className="login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
      <div className="login-forgot-password">
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>
      <div className="login-social">
        <img src={googleIcon} alt="Google Login" />
        <img src={facebookIcon} alt="Facebook Login" />
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
