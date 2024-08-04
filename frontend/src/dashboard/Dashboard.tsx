import { useState } from 'react';

import '../globals.css'
import './Dashboard.css'

import TweetFeed from '../components/TweetFeed/TweetFeed';

function Dashboard() {
  const [tweet, setTweet] = useState('');

  return (
    <div className="main">
      <div className="header">
        <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      </div>
      <div className="body">
        <div className="dashboard">
          <h2>Bienvenido a X, <span className='username'>{localStorage.getItem('username')}</span>.</h2>
          <div className="tweet">
            <h3>Escribir un tweet:</h3>
              <div className="writeTweet">
                <textarea
                  className='tweetInput'
                  placeholder="Escribe aquí tu tweet..."
                  onChange={(e) => setTweet(e.target.value)}
                >
                </textarea>
                <button
                  className='sendButton'
                  onClick={() =>
                    alert('Enviar' + tweet)
                  }
                >Enviar</button>
              </div>
          </div>
          <div className="feed">
            <h3>Tweets recientes:</h3>
              <TweetFeed
                username="juannpg"
                tweet="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium."
                likes={240}
              />
              <TweetFeed
                username="Pablodlh"
                tweet="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
                likes={520}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;