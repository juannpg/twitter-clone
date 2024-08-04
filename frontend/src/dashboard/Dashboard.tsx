import '../globals.css'
import './Dashboard.css'

const tweetFeed = ({text}) => { 
  return (
    <div className='tweetFeed'>
      <p>{text}</p>
    </div>
  )
}

function Dashboard() {
  var TEST = 'TEST';

  return (
    <div className="main">
      <div className="header">
        <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      </div>
      <div className="body">
        <div className="dashboard">
          <h2>Bienvenido a X, <span className='username'>{localStorage.getItem('username')}</span>.</h2>
          <div className="tweet">
            <h3>Escribir un tweet</h3>
          </div>
          <div className="feed">
            <h3>Tweets recientes</h3>
              <tweetFeed text={TEST}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;