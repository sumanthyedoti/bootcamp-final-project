import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {connect} from 'react-redux';
import "../../componentCSS/profile.css";
import PostForm from './PostForm'
import Feed from './Feed'
import {
  postAPostAction, 
  getUserPostsAction,
  likePost,
  dislikePost
} from '../../store/actions/postActions';
const styles = theme => ({
  cssRoot: {
    color: "whitesmoke",
    backgroundColor: "hsl(218, 59%, 44%)"
  }
});
class profileCard extends Component {
  componentDidMount(){
    if(this.props.posts.length===0)this.props.getUserPosts();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="mobile-container">
        <div className="cover-pic">
          <img src="images/cover1.jpeg" />
          <div className="profile-pic">
            <img src="images/profile2.png" />
          </div>
          <div className="follower">
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classNames(classes.margin, classes.cssRoot)}
                style={{ fontWeight: "bolder" }}
              >
                Follow
              </Button>
            </div>
          </div>
        </div>
        
          <PostForm 
            showImageHandler={this.showImageHandler} 
            removeImageHandler={this.removeImageHandler}
            postHandler={this.postHandler}
          />          
          <div className='section'>
            <Feed 
              posts = {this.props.posts} 
              commentHandler={this.commentHandler}
              likeHandler={this.likeHandler}
            />
          </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.reducedUser.user,
    posts: state.reducedPosts.posts,
  }
}

const mapActionsToProps = ({
  postAPost: postAPostAction,
  getUserPosts: getUserPostsAction,
  likePost,
  dislikePost
})
export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(profileCard));
