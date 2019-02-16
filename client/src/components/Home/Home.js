import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../../componentCSS/home.css';
import Feed from './Feed';
import SideDiv from '../SideDiv';
import PostForm from './PostForm';
import {Redirect} from 'react-router-dom'

import {
  signinAction, 
} from '../../store/actions/userAction';
import {
  postAPostAction, 
  getUserPostsAction,
  likePost,
  dislikePost
} from '../../store/actions/postActions';

class Home extends Component {
  componentDidMount(){
    this.props.signin();
    if(this.props.posts.length===0){
      setTimeout(()=>{
        this.props.getUserPosts();
      },1200);
    }
  }
  showImageHandler=(e)=>{
    const photo = document.getElementById('post-photos');
    const showImage = document.getElementById('show-image');
    var file = photo.files[0];
    var reader = new FileReader();
    if(file){
      document.getElementById('remove-image-button').style.display='block';
      reader.onload = function (e) {
      var img = document.createElement("IMG");
      img.height = "36";
      img.style.marginTop='6px';
      img.src = e.target.result;
      showImage.innerHTML = '';
      showImage.appendChild(img);
      }
      reader.readAsDataURL(file);
    }
  }
  removeImageHandler(){
    document.getElementById('post-photos').value='';
    document.getElementById('show-image').innerHTML='';
    document.getElementById('remove-image-button').style.display='none';
  }
  postHandler=()=>{
    const text = document.getElementsByClassName('post-form__text')[0].value.trim();
    this.props.postAPost(text)
    .then(_=>{
      document.getElementsByClassName('post-form__text')[0].value='';
    });
  }
  componentDidUpdate(){

  }
  likeHandler = (postId, isLiked) => {
    if(!isLiked) this.props.likePost(postId);
    else this.props.dislikePost(postId);
  }
  commentHandler = (e) => {
    if(e.keyCode===13) {
      e.target.value='';
    }
  }
  render() {
    // localStorage.removeItem('user'); localStorage.removeItem('userData');
    if(!localStorage.getItem('user')) return <Redirect to='/login' />
    return (
      
      <div className='container home-container'>
        <div className='main-div'>

          <PostForm 
            showImageHandler={this.showImageHandler} 
            removeImageHandler={this.removeImageHandler}
            postHandler={this.postHandler}
          />          

          <div className='section'>
            <Feed 
              posts = {this.props.posts} 
              postsFetch = {this.props.postsFetch} 
              commentHandler={this.commentHandler}
              likeHandler={this.likeHandler}
            />
          </div>
        </div>

        <SideDiv />
        
      </div>
    )
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
  signin: signinAction,
  postAPost: postAPostAction,
  getUserPosts: getUserPostsAction,
  likePost,
  dislikePost
})
export default connect(mapStateToProps, mapActionsToProps)(Home);
