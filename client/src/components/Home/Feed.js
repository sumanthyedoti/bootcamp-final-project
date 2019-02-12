import React, { Component } from 'react'
import FeedItem from '../FeedItem/FeedItem';
import '../../componentCSS/feed.css'
export default class Feed extends Component {
  render() {
    const FeedItems = this.props.posts.map(post => <FeedItem post = {post} /> ) 
    return (
      <div className='post-feed'>
        {FeedItems}
      </div>
    
    )
  }
}
