import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BorderOuterRounded } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  newClass: {
    width: "50%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: "5%"
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  return (
    <div>
      <input placeholder="Username" className={classes.newClass}/>
      <input placeholder="Email" className={classes.newClass}/>
      <button className={classes.newClass}>Submit </button>
    </div>
  )

}



