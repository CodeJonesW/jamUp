import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  newClass: {
    width: "50vw",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: "20%"
  },
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
    <h1 className={classes.newClass}>Sign up with email and password</h1>
  
        <input className={classes.newClass} ref={signUpEmailInput} placeholder="Email"/>
        <input className={classes.newClass}ref={signUpPasswordInput} placeholder="Password"/>
        <button className={classes.newClass} onClick={(e) => handleSubmit(e)}>submit</button>
        <Link to="/signin"><button className={classes.newClass}> Already have an account?</button></Link>
    </div>
  );
}