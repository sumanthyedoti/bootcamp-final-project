import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "../../componentCSS/registrationForm.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import {connect} from 'react-redux';
import {newOrgAction} from '../../store/actions/organisationAction'

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    "border-color":"red"
  },
  grid: {
    width: "58%"
  }
});
const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit
  }
}))(MuiDialogActions);

class RegistrationForm extends React.Component {
  state = {
    open: false,
    selectedDate: new Date(),
    textArea:""
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };
  onTextAreaChange = (event)=>{
      this.setState({textArea:event.target.value})
  }
  handleClose = () => {
    this.setState({ open: false });
  };
 getOrgData = async()=>{

   const orgName=document.getElementById('organisation-name');
   const orgAddress = document.getElementById('organisation-address')
  //  console.log(this.state.textArea,orgName.value,orgAddress.value,this.state.selectedDate)

   this.handleClose()
   this.props.createOrg(this.state.textArea,orgName.value,orgAddress.value,this.state.selectedDate)
   .then(data => {
    orgName.value='';
    orgAddress.value='';
    this.setState({
      textArea:"",
      selectedDate:""
    })
  })
  .catch(err => console.log(err.message))
  }
  render() {
    console.log(this.props.createOrg)
    const { classes } = this.props;
    const { selectedDate } = this.state;
    return (
      <div>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.handleClickOpen}
        >
           + Create Org
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Org. Form
          </DialogTitle>
          <DialogContent>
            <div className="registration">
              <textarea
                className="text-area"
                placeholder="Brief about your organisation"
                onChange={this.onTextAreaChange}
              />
              <div className="org-details">
                <div className="org-name">
                  <label>Name of organisation :</label>
                  <TextField
                    id="organisation-name"
                    label="org name"
                    className={classes.textField}
                    style={{ width: "94%"}}
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div className="org-name">
                  <label>Address of organisation :</label>
                  <TextField
                    id="organisation-address"
                    label="Address"
                    multiline
                    rows="3"
                    style={{ width: "94%" }}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div className="org-name">
                  <label>Establishment Date :</label>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid
                      container
                      className={classes.grid}
                      justify="space-around"
                    >
                      <DatePicker
                        margin="normal"
                        label="choose"
                        style={{"margin-left":"10px"}}
                        value={selectedDate}
                        onChange={this.handleDateChange}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.getOrgData}
              color="primary"
              style={{
                color: "hsl(210, 25%, 30%)",
                "font-weight": "bolder",
                width: "25%",
                "border-radius": "2px",
                padding: "10px"
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// const mapStateToProps = state=>{
//    return{

//    }
// }

const mapActionToProps=({
  createOrg:newOrgAction
})

export default connect(null,mapActionToProps)(withStyles(styles)(RegistrationForm));
