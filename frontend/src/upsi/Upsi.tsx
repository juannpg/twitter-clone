import { Link } from 'react-router-dom';

import './Upsi.css'

const Upsi = () => {
  return (
    <div className="main">
      <div className="header">
        <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      </div>
      <div className="body">
        <h2>Upsi, se siente :p</h2>
        <Link 
          className='linkUpsi'
          to="/"
        >Volver a inicio</Link>
      </div>
    </div>
  )
}

export default Upsi;