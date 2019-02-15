import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import '../../componentCSS/addmember.css';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CompletedTask from './TaskComplete'
import TaskComplete from './TaskComplete'
import TaskinComplete from './TaskinComplete';

const styles = theme => ({
  card: {
    maxWidth: 350,
  },
  dbox:{
    width:700
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
//  state = { expanded: false };
  constructor(props){
      super(props);
      this.state = { expanded: false,open:false,complete:false };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  showCompleteTask=()=>{
    this.setState({open:true,complete:true})
  }
  showInCompleteTask=()=>{
   this.setState({open:true,complete:false})
  }
  handleClose=()=>{
      this.setState({open:false});
  }
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.data.title[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.data.title}
          subheader={this.props.data.createDate}
        />
        <CardContent>
          <Typography component="p">
           {this.props.data.task}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="submit">
            
          </IconButton>
          <IconButton aria-label="Share">
            
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >

          </IconButton>
          <div>
          <Button onClick={this.showCompleteTask}>Completed</Button>
           <Button onClick={this.showInCompleteTask}>In Completed</Button>
           </div>
        </CardActions>
        <Dialog
          fullWidth={true}
          maxWidth='md'
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
        >

          <DialogContent>
          {this.state.complete?<TaskComplete TaskTitle={this.props.data.title} TaskId={this.props.data["_id"]}/>:<TaskinComplete TaskTitle={this.props.data.title} TaskId={this.props.data["_id"]}/>}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              cancel
            </Button>
          </DialogActions>
        </Dialog>
      
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);