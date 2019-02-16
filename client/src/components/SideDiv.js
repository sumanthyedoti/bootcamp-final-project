import React from 'react'
import Footer from './Footer'
import '../componentCSS/task.css';
class SlideTask extends React.Component {
  constructor(props){
    super(props);
    this.state={
      taskList:[]
    }
  }
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    debugger;
    fetch(`http://localhost:4000/task/${user.username}`)
    .then((res)=>{
       return res.json();
    })
    .then((result)=>{
      debugger;
        console.log(result.success[0].notification);
         var notif=result.success.sort((a,b)=>{
          a = new Date(a.crreateDate);
          b = new Date(b.crreateDate);
          return a>b ? -1 : a<b ? 1 : 0;
         })
         this.setState({taskList:notif})
          console.log(notif);
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  render(){
  return (
    <div className='side-div-div'>
      <div className='side-div section'>
        <h3 className='side-title'>Tasks</h3>
         <div className="side-task-view">
          {this.state.taskList.map((data)=>{
            // debugger;
                      var da=new Date(data.dueDate);
                      var day="";       
                      var del=da=(da.getTime()-new Date().getTime());
                      if(del>0){
                      var cd = 24 * 60 * 60 * 1000,
                      ch = 60 * 60 * 1000,
                      d = Math.floor(del / cd),
                      h = Math.floor( (del - d * cd) / ch),
                      m = Math.round( (del - d * cd - h * ch) / 60000);
                      day=d+"d "+h+"h "+m+"m";
                      }
                      else{
                        day="Time over"
                      }
                      var title=data.title;
                      var task=data.task;
            return (
              <div className="task-main">
                <div className="task-title">
                  <div>{title}</div>
                </div>
                <div className="task-about">
                  {task}
                </div>
                <div className="task-time">{day} left</div>
              </div>

            )
          })}
         </div>
      </div>
      <Footer />
    </div>
  )}
}
export default SlideTask;
