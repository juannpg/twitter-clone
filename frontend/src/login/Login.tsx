import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../globals.css'
import './Login.css'

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3001/api/routers/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    const log = await response.json();
    console.log(log);

    if (response.status === 200) {
      alert('Inicio de sesión correcto');
      localStorage.setItem('username', username);
      localStorage.setItem('token', log.token);

      navigate('/dashboard');
    } 

    if (response.status === 400) {
      alert('Completa todos los campos');
    }
    
    if (response.status !== 200 && response.status !== 400) {
      alert('Usuario o contraseña incorrectos');
    }
  }

  return (
    <div className="main">
      <div className="header">
        <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      </div>
      <div className='body'>
        <div className="login">
          <h2>Inicia sesión en X</h2>
          <div className="inputContainer">
            <input
              className='classicInput'
              type="text"
              placeholder="Nombre de usuario"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className='classicInput'
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className='classicButton'
              id='next'
              onClick={() =>
                handleLogin()
              }
            >Siguiente</button>
            <button
              className='classicButton'
              id='black'
            >¿Olvidaste tu contraseña?</button>
          </div>
          <Link 
            className='link'
            to="/register"
          ><span className='grey'>¿No tienes una cuenta? </span>Regístrate</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;