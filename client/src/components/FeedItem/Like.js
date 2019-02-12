import React from 'react';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const styles = {
  likeButton:{
    // color: 
  }
}

const Like = props => {
  const {likeHandler, post_id, isLiked} = props;
  return (
    <>
    <div 
      className={isLiked ? 'post-liked like-button' : 'like-button'} 
      onClick = {() => likeHandler(post_id, isLiked)}
    >
    <ThumbUpIcon style={styles.likeButton} 
    className={isLiked ? 'post-liked feed-item__like-button' : 'feed-item__like-button'} />
     &nbsp; {isLiked ? 'Liked' : 'Like'}
    </div>
    </>
  );
}

export default Like;