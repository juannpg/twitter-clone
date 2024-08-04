import { Link } from 'react-router-dom';

import './TweetFeed.css'

const TweetFeed = ({username, tweet, likes}:{username: string, tweet: string, likes: number}) => {
  return (
    <div className='tweetFeed'>
      <h3>@{username}</h3>
      <div className="tweetContent">
        <p>{tweet}</p>
      </div>
      <div className="tweetFooter">
        <p
          className='likes'
          onClick={() =>
            alert('Like')
          }
        >{likes} Likes</p>
        <Link to='/replie'>Reply</Link>
      </div>
    </div>
  )
}

export default TweetFeed;