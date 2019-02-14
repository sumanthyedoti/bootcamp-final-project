import React, { Component } from "react";
import PropTypes from "prop-types";
// import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import "../../componentCSS/signin.css";

// import {signinAction} from '../../store/actions/userAction';

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
    // "&:hover": {
    //   backgroundColor: " hsl(218, 59%, 44%)"
    // }
  }
});

class Signin extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section className="signin">
        <form className="signin-text-form">
          <div className="signin-text-fields">
            <div>
              <TextField
                id="filled-email-input"
                label="Email/Username"
                className={classes.textField}
                type="Email"
                style = {{width: "96%"}}
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
                style = {{width: "96%"}}
                type="password"
                margin="normal"
                variant="filled"
              />
            </div>
            <div className="buttons">
              <Button
                variant="contained"
                color="primary"
                style = {{width: "25%","border-radius": "2px",padding: "10px"}}
                className={classNames(classes.margin, classes.cssRoot)}
                onClick={this.props.signinHandler}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired
};
// const mapStateToProps=(state) =>{
//   console.log(state)
// }
// const mapActionsToProps = ({
//   signin: signinAction
// })
export default (withStyles(styles)(Signin));
