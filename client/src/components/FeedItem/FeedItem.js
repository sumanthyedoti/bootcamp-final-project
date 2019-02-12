import React, { Component } from 'react'
import Like from './Like';
import Comments from './Comments';
import Share from './Share';
export default class FeedItem extends Component {
  render() {
    const {post} = this.props;
    return (
      <>
      <div className ='feed-item section'>
        <p className = 'post-by'>{post.PostBy.name}</p>
        <p className = 'posted-at'>{post.postTime}</p>
        {/**post text */}
        <p 
          // className={ itemData.images.length===0 ? 'only-text item-text' : 'item-text'} 
        >
          { post.TextData }  
        </p>
        {/**post image */}
        <div>
          {/* {itemData.images ? <img className='item-image' src={itemData.images} alt="post img" /> : null } */}
        </div>
        <div className = 'item-props'>
          <span className='likes'>{post.like} {post.like===1 ? 'like' : 'likes'}</span>
          <span className='comments'>{post.comments.length} {post.comments.length===1 ? 'comment' : 'comments'}</span>
        </div>
        <div className = 'item-options'>
        <Like 
          // post_id = {post_id}
          // isLiked = {isLiked}
          // likeHandler = {likeHandler}
        />
        <Comments
          // displayComments={this.displayComments}
        />
        <Share />
      </div>
      </div>
      </>
    )
  }
}
