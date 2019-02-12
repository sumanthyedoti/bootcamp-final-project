import React, {Component} from 'react';
import Like from './Like';
import Comments from './Comments';
import Share from './Share';

class  Panel extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayComments: false,
    }
    this.displayComments = this.displayComments.bind(this);
  }
  displayComments(){
    this.setState((state, props) => ({
      displayComments: !state.displayComments,
    }));
  }
  render(){
    const {comments, likeHandler, commentHandler, post, isLiked} = this.props;
    return (
      <>
      <div className = 'item-options'>
        <Like 
          post_id = {post._id}
          isLiked = {post.isLiked}
          likeHandler = {likeHandler}
        />
        <Comments displayComments={this.displayComments}/>
        <Share />
      </div>
      {this.state.displayComments ? <hr/> : null}
      <div className='comments-div'>
        <PostComments
          displayComments= {this.state.displayComments} 
          comments = {comments} 
          commentHandler={commentHandler}
          post_id = {post._id}
        />
      </div>
      </>
    );
  }
}


function PostComments(props) {
  if (!props.displayComments) {
    return null;
  }
    const {comments} = props;
    const commentsList = comments.map((comment) => {
    // const date = new Date(comment.created_at).toString();
    // const dateStr = `${date.substring(0, 15)} at ${date.substring(16, 21)}`;
    return (
      <div className='comment' key={comment.comment_id}>
      <div className='comment-line'>
        {/* <span className='commented-by'>{comment.commented_by} </span> */}
        {/* <span className='comment-text'>{comment.comment}</span> */}
        </div>
        {/* <p className='commented-at'>{dateStr}</p> */}
      </div>
    )
  });
  return (
      <>
      <input 
          type='text'
          className='comment-box'
          placeholder='Write a comment...'
          data-key = {props.post_id}
          onKeyUp= {props.commentHandler}
        />
      {commentsList}
      </>
    );
}

export default Panel;