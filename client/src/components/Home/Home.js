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
    backgroundColor: 'hsl(218, 59%, 44%)'
  }
}

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='post-form section'>
          <div className='post-form__text-div'>
          <textarea className='post-form__text'></textarea>
          </div>
          <div className='post-form__button-div'>
            <label htmlFor="post-photos"> 
              <InsertPhotoIcon style={styles.photoButton} className='post-form_photo-button' color='primary' />
            </label>
            <input type="file" name="post-photos[]" id="post-photos" multiple accept=".jpg,.jpeg,.png,.gif"></input>
            <Button variant="contained" color="primary" style={styles.postButton}  className='post-form_post-button'> 
              Post
            </Button>
          </div>
        </div>

        <div className='section'>
          <Feed />
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
