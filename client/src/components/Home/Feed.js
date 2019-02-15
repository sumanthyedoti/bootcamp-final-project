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
    console.log(this.props.postFetch)
    return (
      <div className='post-feed'>
        {!this.props.postsFetch? 
        (
          <>
          <div class="skeleton">
            <div class="skeleton-wrapper">
              <div class="skeleton-wrapper-inner">
                <div class="skeleton-wrapper-body">
                  <div class="skeleton-author"></div>
                  <div class="skeleton-label"></div>
                  <div class="skeleton-content-1"></div>
                  <div class="skeleton-content-2"></div>
                  <div class="skeleton-content-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="skeleton">
          <div class="skeleton-wrapper">
            <div class="skeleton-wrapper-inner">
              <div class="skeleton-wrapper-body">
                <div class="skeleton-author"></div>
                <div class="skeleton-label"></div>
                <div class="skeleton-content-1"></div>
                <div class="skeleton-content-2"></div>
                <div class="skeleton-content-3"></div>
              </div>
            </div>
          </div>
        </div>
        </> 
        )
        :
        FeedItems.length>0?
        FeedItems
        :
        (
          <div className='no-post-div'>
            No posts to show for you!
          </div>
        )
        }
      </div>
    
    )
  }
}
