import React from 'react';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const styles = {
  likeButton:{
    // color: 
  }
}

const Like = props => {
  // const {likeHandler, post_id, isLiked} = props;
  return (
    <>
    <div 
      className='like-button' 
      // onClick = {() => likeHandler(post_id)}
    >
    <ThumbUpIcon style={styles.likeButton} className='feed-item__like-button' />
     &nbsp; Like
    </div>
    </>
  );
}

export default Like;