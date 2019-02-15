import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../../componentCSS/workspace.css'
import SideDiv from '../SideDiv';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { de } from 'date-fns/esm/locale';
export default class Notifications extends Component {
  constructor(props){
    super(props);
    this.state = {
      groups: [],
      notification:[]
    }
  }
  getNotification=(uid)=>{

    
  }
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    debugger;
    fetch(`http://localhost:4000/notification/${user.username}`)
    .then((res)=>{
       return res.json();
    })
    .then((result)=>{
       //  console.log(result.success[0].notification);
         var notif=result.success[0].notification.sort((a,b)=>{
          a = new Date(a.crreateDate);
          b = new Date(b.crreateDate);
          return a>b ? -1 : a<b ? 1 : 0;
         })
         this.setState({notification:notif})
         console.log(notif);
    })
    .catch((err)=>{
      console.log(err)
    })
 
  }
  render() {
    debugger;
   // console.log(this.state.groups)
    //this.getNotification("ram1");
    return (
      <div className='container workspace'>

        <div className='main-div workspace__main-div section'>

        {
          this.state.notification.map((n,i)=>{
          var da=new Date(n.crreateDate);
          var day="";       
          var del=da=(new Date().getTime()-da.getTime());
          var cd = 24 * 60 * 60 * 1000,
          ch = 60 * 60 * 1000,
          d = Math.floor(del / cd),
          h = Math.floor( (del - d * cd) / ch),
          m = Math.round( (del - d * cd - h * ch) / 60000);
          day=d+"d "+h+"h "+m+"m";

        return ( 
                <Paper  elevation={1}>
                <Typography variant="h5" component="h3">
                   {n.msg} 
                </Typography>
                {/* <Typography component="p">
                  {n.crreateDate.getDay()+"-"+(n.crreateDate.getMonth()+1)+"-"+n.crreateDate.getFullYear()}
                </Typography> */}
                <Typography component="p">
                  {day}
                </Typography>
              </Paper>
             )
        })
        }

        </div>
        <SideDiv />
      </div>
    )
  }
}
