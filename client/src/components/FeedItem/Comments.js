import CommentIcon from "@material-ui/icons/Comment";
import React from 'react';
const Comments = props => {
  return (
    <>
    <div
      className='comment-button' 
      // onClick={() => props.displayComments()}
    >
    <CommentIcon className='feed-item__comment-button' />
    &nbsp; Comments
    </div>
    </>
  );
}

export default Comments;