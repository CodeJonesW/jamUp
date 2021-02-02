import React, { useRef } from 'react';
import { useAuth } from "../../Hooks/use-auth";

import { makeStyles } from '@material-ui/core/styles';




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
  const auth = useAuth()
  const signInEmailInput = useRef(null);
  const signInPasswordInput = useRef(null);

  const handleSubmit = () => {
    const user = auth.signin(signInEmailInput.current.value, signInPasswordInput.current.value)
    console.log(user)
  }
  return (
    <div>
      <input ref={signInEmailInput} placeholder="Email" className={classes.newClass}/>
      <input ref={signInPasswordInput} placeholder="password" className={classes.newClass}/>
      <button onClick={handleSubmit} className={classes.newClass}>Submit </button>
    </div>
  )

}



