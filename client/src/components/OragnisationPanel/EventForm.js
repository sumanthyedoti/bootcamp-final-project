import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { makeStyles } from '@material-ui/styles';
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import Button from "@material-ui/core/Button";
import "date-fns";
// import React from 'react';
// import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "material-ui-pickers";

import "../../componentCSS/orgEvent.css";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const styles = {
  photoButton: {
    fontSize: "46px",
    margin: 0,
    padding: 0,
    float: "left",
    color: "hsl(218, 59%, 44%)",
    cursor: "pointer"
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
  },
  grid: {
    width: "60%"
  }
};

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: null
    };
  }

  handleChange = event => {
    this.setState({
      group: event.target.value
    });
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;
    const orgGroups = JSON.parse(localStorage.getItem("orgGroups"));
    const grpListOps = orgGroups.map(grp => {
      return (
        <option id={grp.name} value={grp._id}>
          {grp.name}
        </option>
      );
    });
    return (
      <div className="post-form section">
        <div className="post-form__text-div ">
          <input type="text" placeholder="Title" className="event-form__text" />
        </div>
        <div className="post-form__text-div">
          <textarea
            className="post-form__text"
            placeholder="Write details..."
          />
        </div>
        <div className="event-form__button-div">
          <input type="radio" name="gender" value="groups" />
          <select>{grpListOps}</select>
          <input type="radio" name="gender" value="org" /> Organisation
          <input type="radio" name="gender" value="public" /> Public <br />
          {/* From: <input type='datetime-local' />
          To: <input type='datetime-local' /> */}
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.grid} justify="space-around">
              <DatePicker
                margin="normal"
                label="Date"
                value={selectedDate}
                onChange={this.handleDateChange}
              />
              <TimePicker
                margin="normal"
                label="Time"
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
          >
            Announce
          </Button>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(EventForm);
