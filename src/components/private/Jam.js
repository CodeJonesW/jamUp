import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {isSafari} from 'react-device-detect';
const useStyles = makeStyles({
  root: {
    minWidth: "100%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Jam(props) {
  const classes = useStyles();
  // console.log(props.jamDate)
  let renderDate
  const date = new Date(props.jamDate);
  // console.log(props)
  // console.log(date)
  let dateArray = date.toString().split(" ")
  // console.log(dateArray)
  if(isSafari){
    renderDate = dateArray[0] + ", " + dateArray[1] + " " + dateArray[2] + ", " + dateArray[3] + " " + dateArray[4] + " " + dateArray[6] 
  } else {
    renderDate = dateArray[0] + ", " + dateArray[1] + " " + dateArray[2] + ", " + dateArray[3] + " " + dateArray[4] + " " + dateArray[6][1] + dateArray[7][0] + dateArray[8][0] 
  }



  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.genre}
        </Typography>
        <Typography variant="h5" component="h2">
            {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Info: {props.info}
        </Typography>
        <Typography variant="body2" component="p">
          Location/Server: {props.location}
        </Typography>
        <Typography variant="body2" component="p">
          🕰 Time: {renderDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button data-jamid={props.id} onClick={(e) => props.handleLearnMore(e, props)} size="small"># of Attendees</Button>
        <Button data-jamid={props.id} onClick={(e) => props.postFavoriteJam(e)} size="small">❤️</Button>
        {props.loggedInUserId === props.userId ? <Button data-jamid={props.id} onClick={(e) => props.handleDeleteJam(e)}size="small">🗑</Button> : null}
      </CardActions>
    </Card>
  );
}
