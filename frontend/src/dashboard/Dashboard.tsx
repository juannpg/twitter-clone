import { useState } from 'react';
import { useEffect } from 'react';

import '../globals.css'
import './Dashboard.css'

import TweetFeed from '../components/TweetFeed/TweetFeed';

function Dashboard() {
  const token = localStorage.getItem('token');

  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);

  //gets the last 5 tweets from the database
  const getTweets = async () => {
    const response = await fetch('http://localhost:3001/api/routers/tweets/getTweets', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const log = await response.json();
    console.log(log);

    setTweets(log.tweets);
  }

  //gets the tweets when the component is loaded
  //useEffect allows the code inside the effect to run only after the render is completed, and not during the render cycle itself.
  //cada vez que se utiliza useState, el render se reinicia. en este caso: se inicia el render, llega a getTweets(), usa useState, se recarga todo; quedando en un loop infinito.
  useEffect(() => {
    getTweets();
  }, []);

  const validateTweet = () => {
    if (tweet.length > 250) {
      alert('El tweet no puede tener más de 250 caracteres');
      setTweet('');
    } else {
      writeTweet();
    }
  }

  const writeTweet = async () => {
    // gets token so we can get username
    const response = await fetch(`http://localhost:3001/api/routers/tweets/token?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const log = await response.json();
    const username = log.user.username;

    if (response.status === 200) {
      // sends the tweet to the database
      const response2 = await fetch('http://localhost:3001/api/routers/tweets/writeTweet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: tweet,
          username: username,
        }),
      });
      
      console.log(log);
      const log2 = await response2.json();

      if (response2.status === 201) {
        console.log(log2);
        alert('Tweet enviado correctamente');
        window.location.reload();
      } else {
        console.error(log2);
        alert('Error enviando tweet');
      }
    } else {
      console.error(log);
      alert('Error en el token');
    }
  }

  return (
    <div className="main">
      <div className="headerDashboard">
        <img src="https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=FFFFFF" alt="twitterLogo" className="twitterLogo" />
      </div>
      <div className="body">
        <div className="dashboard">
          <div className="tweet">
            <h2>Bienvenido/a a X, <span className='username'>{localStorage.getItem('username')}</span>.</h2>
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
                    validateTweet()
                  }
                >Enviar</button>
              </div>
          </div>
          <div className="feed">
            <h3>Tweets en las últimas 24 horas:</h3>
            {/* iterates through the tweets and displays them */}
            {tweets.map((tweet: {
              username: string;
              content: string;
              likes: number; },
              index: number) => (
              <TweetFeed
                key={index}
                username={tweet.username}
                tweet={tweet.content}
                likes={tweet.likes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;