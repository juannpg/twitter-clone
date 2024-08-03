import { Link } from 'react-router-dom';

import '../globals.css'
import './Login.css'

function Login() {
  return (
    <div className="main">
      <div className="header">
        <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      </div>
      <div className='body'>
        <div className="login">
          <h1>Inicia sesión</h1>
          <Link 
            className='link'
            to="/"
          >Volver</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;