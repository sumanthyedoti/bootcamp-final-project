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
  
class deleteMemberGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            members:[],
            searchKey:'',
            loading: false,
            memberType:'',
            success:false
        }
    }
    componentDidMount(){
        fetch(`http://localhost:4000/auth/member/group/${this.props.gid}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            var newmembers=data;
            // debugger;
            if(!data.error) {
                console.log(data);
                this.setState({members:newmembers});
            }
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    setSearchText=(e)=>{
      this.setState({searchKey:e.target.value});
    }
    searchMember=(e)=>{
         if(e.which===13){
            fetch(`http://localhost:4000/searchMemberGroup/${this.props.gid}?searchKey=${this.state.searchKey}`)
             .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                debugger;
                console.log(data);
                this.setState({members:data.success});
            })
            .catch((err)=>{
                debugger
                console.log(err);
            })
         }
    }
    selectMemberType=(e)=>{
        this.setState({memberType:e.target.value});
    }
    handleClose=()=>{
        this.setState({open:false})
    }
    deleteMember=(data)=>{
        this.setState({loading:true,open:true})

        var obj={
            gId:this.props.gid,
            uid:data.Username
        }
        // debugger;
       fetch("http://localhost:4000/auth/member/group/remove",{
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      }) 
      .then((res)=>{
          return res.json()
      })
      .then((result)=>{
          debugger;
          if(result.success){
              let newmember=this.state.members.filter(d=>d.Username!==data.Username)
             this.setState({loading:false,success:true,members:newmember})
          }
          else{
            this.setState({loading:false,success:false})
          }
      })
      .catch((err)=>{
        this.setState({loading:false,success:false})
      })
    }
    render(){
        const { classes } = this.props;
        return(
             <div>
                <div className="search-box">
                   <input type="text" className='group-text-ip' value={this.state.searchKey} onChange={this.setSearchText} onKeyUp={this.searchMember} />
                 </div>
                 <div className='table-div'>
                    <table className="member">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>member type</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(this.state.members)}
                        {this.state.members ?
                        this.state.members.map((d)=>{
                            return(
                                <tr key={d.Username}>
                                    <td>{d.name}</td>
                                    <td>{d.Username}</td>
                                    <td>{d.email}</td>
                                    <td >{d.memberType}</td>
                                    <td className="button-container">
                                    <img className="addmember" src="/images/delete.png" alt="delete member" onClick={()=>{this.deleteMember(d)}}/>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        null
                        }
                    </tbody>
                    </table>
                 </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          {this.state.loading ? <CircularProgress className={classes.progress} />:
          this.state.success?
          <div>
              <img className="addmember" src="/images/success.png" alt="success"/>
              <div>delete member successfuly</div>
              <button onClick={this.handleClose}>Ok</button>
          </div>
          :
          <div>
              <img className="addmember" src="/images/failed.png" alt="failed"/>
              <div>delete member failed</div>
              <button onClick= {this.handleClose}>Ok</button>
          </div>
         }
        </Dialog>
     </div> 
        )
    }
}

deleteMemberGroup.defaultProps={
    gid:'5c653f928e4c9961699918b3',
    gname:'React7',
    name:"React"
}
deleteMemberGroup.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(deleteMemberGroup);