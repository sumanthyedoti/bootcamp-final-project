import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../../componentCSS/home.css';
import Feed from './Feed';
import PostForm from './PostForm';
import {Redirect} from 'react-router-dom'
import {
  signinAction, 
  postAPostAction, 
  getUserPostsAction
} from '../../store/actions/userAction';

class Home extends Component {
  componentDidMount(){
    this.props.signin();
    this.props.getUserPosts();
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
    console.log(this.props.posts)
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
            <Feed posts = {this.props.posts} />
          </div>
        </div>

        <div className='side-div section'>
          <h3 className='side-title'>Recommended for you</h3>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.reducedUser.user,
    posts: state.reducedUser.posts,
  }
}

const mapActionsToProps = ({
  signin: signinAction,
  postAPost: postAPostAction,
  getUserPosts: getUserPostsAction
})
export default connect(mapStateToProps, mapActionsToProps)(Home);
