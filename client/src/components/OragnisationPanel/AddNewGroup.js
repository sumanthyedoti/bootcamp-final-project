import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../componentCSS/addmember.css'
import { SnackbarProvider, withSnackbar } from 'notistack';

class AddNewGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gname:'',
            gid:'',
            about:''
        }
    }
    setText=(e,stype)=>{
        if(stype==="gname")
        this.setState({gname:e.target.value})
        else if(stype==="gid")
        this.setState({gid:e.target.value})
        else if(stype==="about")
        this.setState({about:e.target.value})
    }
    createNewGroup=()=>{
        var obj={
          orgId:this.props.orgId,
          orgName:this.props.name,
          name:this.state.gname,
          gid:this.state.gid,
          about:this.state.about
        }
        fetch("http://localhost:4000/auth/group",{
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
                 var mt='success'
             this.props.enqueueSnackbar('Group added Successfuly!', { mt });
             }
             else{
                var mt1='error'
                this.props.enqueueSnackbar('Group added failed!', { mt1 });
             }

          })
          .catch((err)=>{
            var mt1='error'
            this.props.enqueueSnackbar('Group added failed!', { mt1 });
          })
    }
    render(){
       
        return(
         <div className="group-field-container" >
         <TextField
          id="outlined-email-input"
          label="Name"
         // className={classes.textField}
          onChange={(e)=>{this.setText(e,"gname")}}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
                 <TextField
          id="outlined-email-input"
          label="Unique Name"
         // className={classes.textField}
         onChange={(e)=>{this.setText(e,"gid")}}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
                <TextField
          id="outlined-multiline-flexible"
          label="About"
          multiline
          rows="4"
        //   value={this.state.multiline}
        //   onChange={this.handleChange('multiline')}
        //   className={classes.textField}
        onChange={(e)=>{this.setText(e,"about")}}
          margin="normal"
          variant="outlined"
        />
      
              <Button variant="contained" onClick={this.createNewGroup} color="primary">
                    Add New Group
              </Button>
        
         </div>
        )
    }
}


AddNewGroup.propTypes = {
    enqueueSnackbar: PropTypes.func.isRequired,
  };
const MyApp = withSnackbar(AddNewGroup);

function AddGroup(props) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp orgId={props.orgId} name={props.name} />
    </SnackbarProvider>
  );
}
AddGroup.defaultProps={
    orgId:'5c641cbe9da6df34ab2baf51',
    name:"ram7star"
}
export default AddGroup;
  //export default AddNewGroup;