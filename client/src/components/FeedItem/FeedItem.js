import React, { Component } from 'react'
import Like from './Like';
import Comments from './Comments';
import Share from './Share';
export default class FeedItem extends Component {
  render() {
    return (
      <>
      <div className ='feed-item'>
        {/* <p className = 'post-by'>{itemData.post_by}</p> */}
        <p className = 'post-by'>Ram Sumanth Vishal</p>
        {/* <p className = 'posted-at'>{dateStr}</p> */}
        <p className = 'posted-at'>2 days ago</p>
        {/**post text */}
        <p 
          // className={ itemData.images.length===0 ? 'only-text item-text' : 'item-text'} 
        >
          {/* { itemData.item_description }   */}
          Lrem post desc kjsdhwqw qwehwqe asdoasd qweiuqw asdkjdwuhuas wquhqw asjhw qwuihqw 
        </p>
        {/**post image */}
        <div>
          {/* {itemData.images ? <img className='item-image' src={itemData.images} alt="post img" /> : null } */}
        </div>
        <div className = 'item-props'>
          {/* <span className='likes'>{itemData.likes} likes</span> */}
          <span className='likes'>2 likes</span>
          {/* <span className='comments'>{commentsCount} {commentsCount===1 ? 'comment' : 'comments'}</span> */}
          <span className='comments'>12 comments</span>
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
