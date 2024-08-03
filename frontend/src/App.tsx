import { useNavigate } from 'react-router-dom';

import './globals.css'
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <div className="main">
      
      <div className="header">
        <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      </div>

      <div className="body">
        <div className="app">
          <h1>Lo que está <br /> pasando ahora</h1>
          <h2>Únete Hoy</h2>
          <div className="buttonContainer">
            <button
              className="classicButton"
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
              className='classicButton'
              id='blue'
              onClick={() => 
                navigate('/register')
              }
            >Crear cuenta</button>
            
            <p className='terms'>Al registrarte, aceptas los <span className='blue'>Términos de servicio</span> y la <span className='blue'>Política de privacidad</span>, incluida la política de <span className='blue'>Uso de Cookies</span>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;