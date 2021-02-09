import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useAuth } from "../../Hooks/use-auth";

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
  const auth = useAuth();

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
        {props.info}
        </Typography>
        <Typography variant="body2" component="p">
          🎺 🥁 🎸
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button data-jamid={props.id} onClick={(e) => props.postFavoriteJam(e)} size="small">❤️</Button>
        {props.loggedInUserId === props.userId ? <Button data-jamid={props.id} onClick={(e) => props.handleDeleteJam(e)}size="small">🗑</Button> : null}
      </CardActions>
    </Card>
  );
}
