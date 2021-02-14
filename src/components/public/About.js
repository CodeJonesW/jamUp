import React, { useRef } from 'react';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  input: {
    width: "50%",
    marginTop: '5%',
    borderRadius: "5px"

  },
  link: {
    width: "50%",
    marginTop: '5%',
    borderRadius: "5px"

  },
  submit: {
    width: "50%",
    marginTop: '5%',
    borderRadius: "5px"

  },
  h1: {
    width: "50%",
    marginTop: '5%',
    textAlign: 'center'

  },
  button: {
    width: "100%",
    marginTop: '5%'

  },
  outerDiv: {
    marginLeft: '25%',
    width: "50%",
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
  },
  root: {
    minWidth: "80%",
    height: "100%",
    margin: "1%"
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
}));


export default function About(props) {
  const classes = useStyles();

  return (
    
        <div className={classes.outerDiv} >
          <h1 className={classes.h1} > About Us</h1>
          <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Genre:
                </Typography>
                <Typography variant="h5" component="h2">
                    Title:
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Info:
                </Typography>
                <Typography variant="body2" component="p">
                Location/Server: 
                </Typography>
                <Typography variant="body2" component="p">
                🕰 Time: =
                </Typography>
            </CardContent>
            <CardActions>
               
            </CardActions>
         </Card>
         <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                Info:
                </Typography>
                <Typography variant="body2" component="p">
               - Stuff
                </Typography>
                <Typography variant="body2" component="p">
                - Stuff
                </Typography>
            </CardContent>
            <CardActions>
               
            </CardActions>
         </Card>
         <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                Info:
                </Typography>
                <Typography variant="body2" component="p">
               - Stuff
                </Typography>
                <Typography variant="body2" component="p">
                - Stuff
                </Typography>
            </CardContent>
            <CardActions>
               
            </CardActions>
         </Card>


          <Link  className={classes.link} to="/"><button className={classes.button}> back</button></Link>
    

        </div>
    
  )

}


