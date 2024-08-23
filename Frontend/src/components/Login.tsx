import React, { useState, useEffect } from 'react';
import './Login.css';
import tuduLogo from '../assets/images/tudu_icon.png';
import googleIcon from '../assets/images/google_icon.png';
import axios from 'axios';

const Login: React.FC = () => {
  // Estados para los campos de entrada, el mensaje y el botón deshabilitado
  const [email, setEmail] = useState<string>(''); // Tipo explícito como string
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true); // Tipo explícito como booleano
  

  // Efecto para habilitar o deshabilitar el botón en función de los campos
  useEffect(() => {
    if (email.trim() && password.trim()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

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
      <button className="login-button" onClick={handleLogin} disabled={isDisabled}>
        Login
      </button>
      <div className="login-forgot-password">
        <a href="#">¿Olvidaste tu contraseña? <br /> </a>
      </div>
      <div className="login-register-link">
        <a href="#">regístrate</a>
      </div>
      <div className="login-social">
        <img src={googleIcon} alt="Google Login" />
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
