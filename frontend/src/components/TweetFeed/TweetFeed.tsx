import { Link } from 'react-router-dom';

import './TweetFeed.css'

const TweetFeed = ({username, tweet, likes}:{username: string, tweet: string, likes: number}) => {
  return (
    <div className='tweetFeed'>
      <h4>@{username}</h4>
      <div className="tweetContent">
        <p className='tweetText'>{tweet}</p>
      </div>
      <div className="tweetFooter">
        <p
          className='likes'
          onClick={() =>
            alert('Like')
          }
        >{likes} Likes</p>
        <Link className='replyLink' to='/reply'>Responder</Link>
      </div>
      <div className="lineTweet"></div>
    </div>
  )
}

export default TweetFeed;