import React, { Component } from 'react'
import FeedItem from '../FeedItem/FeedItem';
import '../../componentCSS/feed.css'
export default class Feed extends Component {
  render() {
    const FeedItems = this.props.posts.map(post => {
      return (
      <FeedItem 
        post = {post} 
        commentHandler={this.props.commentHandler} 
        likeHandler={this.props.likeHandler}
      />)
    } ) 
    return (
      <div className='post-feed'>
        {FeedItems}
      </div>
    
    )
  }
}
