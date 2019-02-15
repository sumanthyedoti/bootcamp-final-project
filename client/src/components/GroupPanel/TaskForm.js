import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../../componentCSS/orgEvent.css";
import "date-fns";
// import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "material-ui-pickers";
import Select from 'react-select';
// import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import TaskCard from './TaskCard';


// const suggestions = [
//   { label: 'Afghanistan' },
//   { label: 'Aland Islands' },
//   { label: 'Albania' },
//   { label: 'Algeria' },
//   { label: 'American Samoa' },
//   { label: 'Andorra' },
//   { label: 'Angola' },
//   { label: 'Anguilla' },
//   { label: 'Antarctica' },
//   { label: 'Antigua and Barbuda' },
//   { label: 'Argentina' },
//   { label: 'Armenia' },
//   { label: 'Aruba' },
//   { label: 'Australia' },
//   { label: 'Austria' },
//   { label: 'Azerbaijan' },
//   { label: 'Bahamas' },
//   { label: 'Bahrain' },
//   { label: 'Bangladesh' },
//   { label: 'Barbados' },
//   { label: 'Belarus' },
//   { label: 'Belgium' },
//   { label: 'Belize' },
//   { label: 'Benin' },
//   { label: 'Bermuda' },
//   { label: 'Bhutan' },
//   { label: 'Bolivia, Plurinational State of' },
//   { label: 'Bonaire, Sint Eustatius and Saba' },
//   { label: 'Bosnia and Herzegovina' },
//   { label: 'Botswana' },
//   { label: 'Bouvet Island' },
//   { label: 'Brazil' },
//   { label: 'British Indian Ocean Territory' },
//   { label: 'Brunei Darussalam' },
// ].map(suggestion => ({
//   value: suggestion.label,
//   label: suggestion.label,
// }));

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 50,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
  photoButton: {
    fontSize: "46px",
    margin: 0,
    padding: 0,
    float: "left",
    color: "hsl(218, 59%, 44%)",
    cursor: "pointer",
    grid: {
      width: "60%"
    }
  },
  postButton: {
    margin: "4px",
    float: "right",
    borderRadius: "2px",
    fontWeight: "bold",
    backgroundColor: "hsl(218, 59%, 44%)"
  },
  formControl: {
    width: "140px",
    margin: "6px 0 0 20px",
    height: "42px"
  }
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};
// const styles = {
//   photoButton: {
//     fontSize: "46px",
//     margin: 0,
//     padding: 0,
//     float: "left",
//     color: "hsl(218, 59%, 44%)",
//     cursor: "pointer",
//     grid: {
//       width: "60%"
//     }
//   },
//   postButton: {
//     margin: "4px",
//     float: "right",
//     borderRadius: "2px",
//     fontWeight: "bold",
//     backgroundColor: "hsl(218, 59%, 44%)"
//   },
//   formControl: {
//     width: "140px",
//     margin: "6px 0 0 20px",
//     height: "42px"
//   }
// };

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: null,
      selectedDate: new Date(),
      single: null,
      multi: null,
      suggestions:[],
      groups:[],
      groupvalue:-1,
      selectList:[],
      groupdata:null,
      taskList:[]
    };
  }
  handleChange1 = name => data => {
   // debugger;
    //alert(JSON.stringify(name));
    console.log(name)
   this.state.selectList.push({Username:data.value})

    this.setState({
      [name]: data,
    });
    console.log(this.state);
  };
  getTask=(gid)=>{
    fetch(`http://localhost:4000/getTask/${gid}`)
    .then((res)=>{
      return res.json()
    })
    .then((result)=>{
      this.setState({taskList:result.success})
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  componentDidMount(){
    const orgGroups = JSON.parse(localStorage.getItem("orgGroups"));
      var ldata=orgGroups.map((d)=>{
        return d.name
      })
      this.setState({groups:ldata});
  }


  handleChange = event => {
    this.setState({
      group: event.target.value
    });
  };
  selectGroup=(e)=>{
  
   var indexdata=parseInt(e.target.value);
   this.setState({groupvalue:indexdata})
   debugger;
   if(indexdata!==-1){
   const orgGroups = JSON.parse(localStorage.getItem("orgGroups"));
      this.getTask(orgGroups[indexdata]["_id"])
    this.setState({groupdata:orgGroups[indexdata]})
   var members=orgGroups[indexdata].member.map((d)=>{
       return({value:d.Username,label:d.name+` ( username:${d.Username} )`})
   })
   this.setState({suggestions:members});
  }
  }
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  submitTask=()=>{
   var taskTitle=document.getElementById("task-title").value;
   var taskAbout=document.getElementById("task-about").value;
   var vardat=this.state.multi.map((d)=>{
     return {Username:d.value}
   });
   console.log(vardat);
   console.log(this.state.selectedDate);
   var bodydata={title:taskTitle,
   topics:"javascript",
   task:taskAbout,
   dueDate:this.state.selectedDate,
   gId:this.state.groupdata["_id"],
   uid:"vishal",
   member:vardat,
   msg:`New task '${taskTitle}' is  assigned in the group '${this.state.groupdata.name}'`
}
    console.log(bodydata);

    fetch("http://localhost:4000/auth/task",{
    "method":"post",
    headers:{
    "Content-Type": "application/json"
    },
    body:JSON.stringify(bodydata)
    })
    .then((res)=>{
    return res.json();
    })
    .then((result)=>{
      debugger;
    //  this.state.taskList.push(result.success)
    this.getTask(bodydata.gId);
   //   this.setState(this.state)
    console.log(result)
    })
    .catch((err)=>{
    debugger;
    console.log(err)
    });
  }
  render() {
    const { classes ,theme} = this.props;
    const { selectedDate } = this.state;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
      <div className="post-form section">
        <div className="post-form__text-div ">
          <input id="task-title" type="text" placeholder="Title" className="event-form__text" />
        </div>
        <div className="post-form__text-div">
          <textarea
            id="task-about"
            className="post-form__text"
            placeholder="Write details..."
          />
          <div className="select-group">
            <select  onChange={this.selectGroup}>
             <option value="-1">select group</option>
              {
                  this.state.groups.map((d,i)=>{
                    return  <option value={i}>{d}</option>
                  })
              }
            </select>
          </div>
        </div>
        <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            textFieldProps={{
              label: 'Label',
              InputLabelProps: {
                shrink: true,
              },
            }}
            options={this.state.suggestions}
            components={components}
            value={this.state.multi}
            onChange={this.handleChange1('multi')}
            placeholder="Select multiple countries"
            isMulti
          />
        </NoSsr>
      </div>
        <div className="event-form__button-div">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.grid} justify="space-around">
              <DatePicker
                margin="normal"
                label="Due Date"
                value={selectedDate}
                onChange={this.handleDateChange}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Button
            variant="contained"
            color="primary"
            style={styles.postButton}
            className="post-form_post-button"
            // onClick={props.postHandler}
            onClick={this.submitTask}
          >
            Assign
          </Button>
        </div>
        <div   className="task-view">
        {this.state.taskList.map((d)=>{
            return <div className="task-card-view"> <TaskCard data={d}/></div>
        })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles,{ withTheme: true })(EventForm);
