import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {connect} from 'react-redux';
import "../../componentCSS/profile.css";
import PostForm from './PostForm';
import {Redirect} from 'react-router-dom';
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
  constructor(){
    super();
    this.state={
      logout: false,
    }
  }
  componentDidMount(){
    if(this.props.posts.length===0)this.props.getUserPosts();
  }
  logout=()=>{
    this.setState({
      logout: true,
    })
    localStorage.clear();
  }
  render() {
    const { classes } = this.props;
    if(this.state.logout) return <Redirect to='/login' />
    return (
      <>
      <div className="mobile-container">
        <div className="cover-pic">
          <img src="images/cover1.jpeg" />
          <div className="profile-pic">
            <img src="images/profile2.png" />
          </div>
          <div className='profile-info'>
            <div className="profile-name">
              {JSON.parse(localStorage.getItem('userData')).Name}
            </div>
            <div className="follower">
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classNames(classes.margin, classes.cssRoot)}
                  style={{ fontWeight: "bolder" }}
                  onClick={this.logout}
                >
                  Logout
                </Button>
              </div>
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
              postsFetch = {this.props.postsFetch}
            />
          </div>

      </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.reducedUser.user,
    posts: state.reducedPosts.posts,
    postsFetch: state.reducedPosts.postsFetch,
  }
}

const mapActionsToProps = ({
  postAPost: postAPostAction,
  getUserPosts: getUserPostsAction,
  likePost,
  dislikePost
})
export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(profileCard));
