import '../globals.css'
import './Dashboard.css'

function Dashboard() {

  return (
    <div className="main">
      <div className="header">
        <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      </div>
      <div className="body">
        <div className="dashboard">
          <h2>Bienvenido a X, <span className='username'>{localStorage.getItem('username')}</span>.</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;