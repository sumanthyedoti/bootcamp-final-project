import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../../componentCSS/home.css';
import Feed from './Feed';
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import Button from '@material-ui/core/Button';

const styles = {
  photoButton: {
    fontSize: '46px',
    margin: 0,
    padding: 0,
    float: 'left',
    color: 'hsl(218, 59%, 44%)',
    cursor: 'pointer',

  },
  postButton: {
    margin: '4px',
    float: 'right',
    "border-radius":"2px",
    backgroundColor: 'hsl(218, 59%, 44%)'
  }
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      postImages:[]
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
  render() {
    // localStorage.clear();
    return (
      
      <div className='container home-container'>
        <div className='main-div'>
          <div className='post-form section'>
            <div className='post-form__text-div'>
            <textarea className='post-form__text'></textarea>
            </div>
            <div className='post-form__button-div'>
              <label htmlFor="post-photos"> 
                <InsertPhotoIcon style={styles.photoButton} className='post-form_photo-button' color='primary' />
              </label>
              <input type="file" name="post-photo"  id="post-photos" accept=".jpg,.jpeg,.png,.gif"
                onChange={this.showImageHandler}
              ></input>
              <div id="show-image-div">
                <span id='remove-image-button' onClick={this.removeImageHandler}>&#10005;</span>
                <div id="show-image">
                </div>
              </div>
              <Button variant="contained" color="primary" style={styles.postButton}  className='post-form_post-button'> 
                Post
              </Button>
            </div>
          </div>

          <div className='section'>
            <Feed />
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

  }
}

const mapActionsToProps = ({
  // postPost: postPostAction
})
export default connect(mapStateToProps, mapActionsToProps)(Home);
