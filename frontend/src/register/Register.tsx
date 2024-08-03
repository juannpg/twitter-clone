import { Link } from 'react-router-dom';

import '../globals.css'
import './Register.css'

function Register() {
  return (
    <div className="main">
      <div className="header">
        <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      </div>
      <div className="body">
        <div className="login">
          <h1>Crea tu cuenta</h1>
          <div className="inputContainer">
            <input
              className='classicInput'
              type="text"
              placeholder="Nombre"
            />
            <input
              className='classicInput'
              type="text"
              placeholder='Correo electrónico'
            />
            <button
              className='classicButton'
            >Siguiente</button>
          </div>
          <Link 
            className='link'
            to="/"
          >Volver</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;