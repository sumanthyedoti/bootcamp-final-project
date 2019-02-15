import React from 'react';
import '../../componentCSS/addmember.css'
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
// import Button from '@material-ui/core/Button';
// import Fab from '@material-ui/core/Fab';
// import CheckIcon from '@material-ui/icons/Check';
// import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
    },
  });
  
class AddMemberGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            members:[],
            searchKey:'',
            loading: false,
            memberType:'member',
            success:false
        }
    }
    componentDidMount(){
        fetch(`http://localhost:4000/taskmember/${this.props.TaskId}?access=completeMember`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            this.setState({members:data.success});
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    handleClose=()=>{
        this.setState({open:false})
    }
  
    render(){
        const { classes } = this.props;
        return(
             <div>
                
                 <table className="member">
                 <thead>
                     <tr>
                     <th>Name</th>
                     <th>UserName</th>
                     <th>Email</th>
                     <th>gender</th>
                     <th></th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.state.members ? 
                     this.state.members.map((d)=>{
                         return(
                             <tr key={d.Username}>
                                 <td>{d.Name}</td>
                                 <td>{d.Username}</td>
                                 <td>{d.email}</td>
                                 <td >{d.gender}</td>
                                 <td className="button-container">
                                 <td><strong>Completed</strong></td>
                                 </td>
                             </tr>
                         )
                     })
                    :
                     null
                    }
                 </tbody>
                 </table>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          {this.state.loading ? <CircularProgress className={classes.progress} />:
          this.state.success?
          <div>
              <img className="addmember" src="/images/success.png" alt="success"/>
              <div>adding member successfuly</div>
              <button onClick={this.handleClose}>Ok</button>
          </div>
          :
          <div>
              <img className="addmember" src="/images/failed.png" alt="failed"/>
              <div>adding member failed</div>
              <button onClick= {this.handleClose}>Ok</button>
          </div>
         }
        </Dialog>
     </div> 
        )
    }
}

AddMemberGroup.defaultProps={
    TaskId:'5c65414ba932657f552d34d5',
    TaskTitle:'javascript event'
    // gname:'React7',
    // name:"React"
}
AddMemberGroup.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(AddMemberGroup);