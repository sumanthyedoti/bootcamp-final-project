import React from 'react'
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
    "borderRadius":"2px",
    backgroundColor: 'hsl(218, 59%, 44%)'
  }
}
export default function PostForm(props) {
  return (
    <div className='post-form section'>
      <div className='post-form__text-div'>
        <textarea className='post-form__text'></textarea>
      </div>
      <div className='post-form__button-div'>
        <label htmlFor="post-photos"> 
          <InsertPhotoIcon style={styles.photoButton} className='post-form_photo-button' color='primary' />
        </label>
        <input type="file" name="post-photo"  id="post-photos" accept=".jpg,.jpeg,.png,.gif"
          onChange={props.showImageHandler}
        ></input>
        <div id="show-image-div">
          <span id='remove-image-button' onClick={props.removeImageHandler}>&#10005;</span>
          <div id="show-image">
          </div>
        </div>
        <Button 
          variant="contained" color="primary" 
          style={styles.postButton}  className='post-form_post-button'
          onClick={props.postHandler}  
        > 
          Post
        </Button>
      </div>
    </div>
  )
}
