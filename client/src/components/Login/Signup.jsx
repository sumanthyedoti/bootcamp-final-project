import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import "../../componentCSS/signin.css";
import { signupAction } from "../../store/actions/userAction";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssRoot: {
    color: "whitesmoke",
    backgroundColor: "hsl(218, 59%, 44%)"
  },
  formControl: {
    margin: theme.spacing.unit * 10
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  grid: {
    width: "70%"
  }
});

class Signup extends Component {
  state = {
    value: "",
    selectedDate: new Date()
  };
  handleChange = event => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  signupHandler = ()=>{
    const Name = document.getElementById('filled-name-input');
    const Username = document.getElementById('filled-username-input')
    const Email = document.getElementById('filled-email-input')
    const Password = document.getElementById('filled-password-input')
    const Gender = this.state.value
    const BirthDate = this.state.selectedDate
    // console.log(Name.value,Username.value,Email.value,Password.value,Gender,BirthDate)
    this.props.signup(Name.value,Username.value,Email.value,Password.value,Gender,BirthDate)
    .then(data=>{
      Name.value="";
      Username.value="";
      Email.value="";
      Password.value="";

    })
    .catch(err=>console.log(err))
  }
  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;
    return (
      <section className="signin">
        <form className="signin-text-form">
          <div className="signin-text-fields">
            <div>
              <TextField
                id="filled-name-input"
                label="Name"
                className={classes.textField}
                type="Name"
                style={{ width: "96%" }}
                autoComplete="current-Name"
                margin="normal"
                variant="filled"
              />
            </div>
            <div>
              <TextField
                id="filled-username-input"
                label="username"
                className={classes.textField}
                type="username"
                style={{ width: "96%" }}
                autoComplete="current-username"
                margin="normal"
                variant="filled"
              />
            </div>
            <div className="gender-date">
              <FormControl
                component="fieldset"
                style={{ margin: "0px", width: "100%" }}
                className={classes.formControl}
              >
                <h2>Gender</h2>
                <RadioGroup
                  aria-label="gender"
                  name="gender2"
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={{ display: "flex", "flex-direction": "row" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio color="primary" />}
                    label="Other"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container className={classes.grid} justify="space-around">
                  <DatePicker
                    margin="normal"
                    label="D.O.B"
                    style={{ "padding-top": "10px" }}
                    value={selectedDate}
                    onChange={this.handleDateChange}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </div>
            <div>
              <TextField
                id="filled-email-input"
                label="Email"
                className={classes.textField}
                type="Email"
                style={{ width: "96%" }}
                autoComplete="current-Email"
                margin="normal"
                variant="filled"
              />
            </div>
            <div>
              <TextField
                id="filled-password-input"
                label="Password"
                className={classes.textField}
                style={{ width: "96%" }}
                type="password"
                margin="normal"
                variant="filled"
              />
            </div>
            <div className="buttons">
              <Button
                variant="contained"
                color="primary"
                style={{
                  width: "25%",
                  "border-radius": "2px",
                  padding: "10px"
                }}
                className={classNames(classes.margin, classes.cssRoot)}
                onClick={this.signupHandler}
              >
                Signup
              </Button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapActionToProps=({
  signup:signupAction
})

export default connect(
  null,
  mapActionToProps
)(withStyles(styles)(Signup));
