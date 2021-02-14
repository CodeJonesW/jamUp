import React, { useRef } from 'react';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


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
    marginTop: '10%',
    width: "100%",
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
  }
}));


export default function About(props) {
  const classes = useStyles();

  return (
    <div className={classes.body}>
        <div className={classes.outerDiv} >
          <h1 className={classes.h1} >JamUp About</h1>
          <Link  className={classes.link} to="/"><button className={classes.button}> back</button></Link>
    

        </div>
    </div>
    
  )

}



