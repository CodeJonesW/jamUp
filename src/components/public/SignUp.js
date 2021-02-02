import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from "../../Hooks/use-auth";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const auth = useAuth();
  const signUpEmailInput = useRef(null);
  const signUpPasswordInput = useRef(null);
  
  const handleSubmit = (e) => {
    let user = auth.signup(signUpEmailInput.current.value, signUpPasswordInput.current.value)
    console.log(user.email)
  }

  return (
    <div>
    <h1>Sign up with email and password</h1>
  
        <input ref={signUpEmailInput} placeholder="Email"/>
        <input ref={signUpPasswordInput} placeholder="Password"/>
        <button onClick={(e) => handleSubmit(e)}>submit</button>
  
    </div>
  );
}