import React from 'react';

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
                <Typography variant="h5" className={classes.pos} color="textSecondary">
                Welcome to JamUp!
                </Typography>
                <Typography variant="body2" component="p">
                - Our goal is to connect musicians online by cordinating meeting times on various applications so we can all practice remotely.
                </Typography>
                <Typography variant="body2" component="p">
                - Jams are stored in UTC time and converted to your local time for everyone's convenience.
                </Typography>
                <Typography variant="body2" component="p" >
                - Currently our favorite application for online jamming is called <a target="_blank" href="https://jamulus.io/">Jamulus</a>
                </Typography>
            </CardContent>
            <CardActions>
               
            </CardActions>
         </Card>
          <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Genre: Funk
                </Typography>
                <Typography variant="h5" component="h2">
                    Title: Late Night Groove
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Info: All instruments welcome! 
                </Typography>
                <Typography variant="body2" component="p">
                Location/Server: Server Name and Connection Details
                </Typography>
                <Typography variant="body2" component="p">
                🕰 Time: = Local Time
                </Typography>
            </CardContent>
            <CardActions>
               
            </CardActions>
         </Card>
       
         <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" className={classes.pos} color="textSecondary">
                Creating a Jam
                </Typography>
                <Typography variant="body2" component="p">
               - When creating a jam, providing the correct CONNECTION DETAILS are very important for jams to actually happen!
                </Typography>
                <Typography variant="body2" component="p">
                - When using Jamulus make sure to include the SERVER NAME, LIST GENRE, and TIME. If you are using another application for jamming, list it and the necessary connection details.
                </Typography>
                <Typography variant="body2" component="p">
                - Make sure to sign up for jams you create to tell others you are also attending : )
                </Typography>
                <Typography variant="body2" component="p">
                - JamUp is an ongoing project. We look forward to improving upon ther initial design. If you are interested in helping us grow, join us in our <a target="_blank" href="https://discord.gg/xhPZPNYzSJ">Discord</a>
                </Typography>
            </CardContent>
            <CardActions>
               
            </CardActions>
         </Card>


          <Link  className={classes.link} to="/"><Button variant="contained" className={classes.button}> back</Button></Link>
    

        </div>
    
  )

}


