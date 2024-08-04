import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../globals.css'
import './Register.css'

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const response = await fetch('http://localhost:3001/api/routers/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    });

    const log = await response.json();
    console.log(log);

    if (response.status === 201) {
      alert('Usuario creado correctamente');
      navigate('/login');
    } 

    if (response.status === 400) {
      alert('Completa todos los campos');
    }
    
    if (response.status !== 201 && response.status !== 400) {
      alert('Error al crear el usuario');
    }
  }

  return (
    <div className="main">
      <div className="header">
        <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      </div>
      <div className="body">
        <div className="login">
          <h2>Crea tu cuenta</h2>
          <div className="inputContainer">
            <input
              className='classicInput'
              type="text"
              placeholder="Nombre"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className='classicInput'
              type="email"
              placeholder='Correo electrónico'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='classicInput'
              type="password"
              placeholder='Contraseña'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className='classicButton'
              id='next'
              onClick={() =>
                handleRegister()
              }
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