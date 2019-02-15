import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import '../../componentCSS/orgEvent.css'


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
    fontWeight: 'bold',
    backgroundColor: 'hsl(218, 59%, 44%)'
  },
  formControl: {
    width: '140px', 
    margin: '6px 0 0 20px',
    height: '42px',
  },
}



export default class EventForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      group: null,
    }
  }
  
  handleChange=(event)=> {
    this.setState({
      group: event.target.value,
    })
  }
  render(){
    const orgGroups = JSON.parse(localStorage.getItem('orgGroups'));
    const grpListOps = orgGroups.map(grp => {
      return (<option id={grp.name} value={grp._id}>{grp.name}</option>)
    })
    return (
      <div className='post-form section'>
        <div className='post-form__text-div '>
          <input type='text' placeholder='Title' className='event-form__text' />
        </div>
        <div className='post-form__text-div'>
          <textarea className='post-form__text' placeholder='Write details...'></textarea>
        </div>
        <div className='event-form__button-div'>
          Due Date: <input type='date' />
          <Button 
            variant="contained" color="primary" 
            style={styles.postButton}  className='post-form_post-button'
            // onClick={props.postHandler}
          > 
          Assign
          </Button>
        </div>
      </div>
    )
  }
}
