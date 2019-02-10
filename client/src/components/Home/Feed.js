import React, { Component } from 'react'
import FeedItem from '../FeedItem/FeedItem';
import '../../componentCSS/feed.css'
export default class Feed extends Component {
  render() {
    return (
      <div className='post-feed'>
        <FeedItem />  
      </div>
    
    )
  }
}
