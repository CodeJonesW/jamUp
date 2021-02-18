import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';
import jamCalls from '../../utils/jamAPI'

const useStyles = makeStyles((theme) => ({
  input: {
    width: "50%",
    marginTop: '5%'

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
    display: 'flex'
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const auth = useAuth();
  const signUpEmailInput = useRef(null);
  const signUpPasswordInput = useRef(null);
  const signUpConfirmPasswordInput = useRef(null);
  
  const handleSubmit = async (e) => {
    if(signUpPasswordInput.current.value !== signUpConfirmPasswordInput.current.value){
      alert("Passwords do not match")
      signUpConfirmPasswordInput.current.focus();
      return
    }
    let password = signUpPasswordInput.current.value
    let user = await auth.signup(signUpEmailInput.current.value, password)
    jamCalls.postUser({"email": user.email, "firebase": user.uid})
  }

  return (
    <div className={classes.outerDiv}>
    <h1 className={classes.h1}>Sign up with email and password</h1>
  
        <input className={classes.input} ref={signUpEmailInput} placeholder="Email"/>
        <input type="password" className={classes.input}ref={signUpPasswordInput} placeholder="Password"/>
        <input type="password" className={classes.input}ref={signUpConfirmPasswordInput} placeholder="Confirm Password"/>
        <button className={classes.input} onClick={(e) => handleSubmit(e)}>submit</button>
        <Link className={classes.input} to="/"><button className={classes.button}> Already have an account?</button></Link>
    </div>
  );
}