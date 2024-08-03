import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './globals.css'
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      <div className="app">
        <h1>Únete a X hoy</h1>
        <div className="buttonContainer">
          <button
            className="loginButton"
            onClick={() => 
              navigate('/login')
            }
          >Iniciar sesión</button>

          <div className="line-container">
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <button
            className='registerButton'
            onClick={() => 
              navigate('/register')
            }
          >Crear cuenta</button>
          
          <p className='terms'>Al registrarte, aceptas los <span className='blue'>Términos de servicio</span> y la <span className='blue'>Política de privacidad</span>, incluida la política de <span className='blue'>Uso de Cookies</span>.</p>
        </div>
      </div>
    </div>
  );
}

export default App;