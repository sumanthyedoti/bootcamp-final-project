import React, { Component } from 'react'
import PostPanel from './PostPanel'
export default class FeedItem extends Component {
  render() {
    const {post} = this.props;
    // console.log(post)
    return (
      <>
      <div className ='feed-item section'>
        <p className = 'post-by'>{post.PostBy.name}</p>
        <p className = 'posted-at'>{post.postTime.substring(0,16).replace('T', ', ')}</p>
        {/**post text */}
        <p 
          // className={ itemData.images.length===0 ? 'only-text item-text' : 'item-text'} 
          className='item-text'
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
        <PostPanel 
          comments={post.comments} 
          commentHandler={this.props.commentHandler} 
          likeHandler={this.props.likeHandler}
          post = {post}
        />  
      </div>
      </>
    )
  }
}
