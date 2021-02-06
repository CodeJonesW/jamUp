import React, { useRef } from 'react';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


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
    alignItems: 'center',
    display: 'flex'
  },
}));


export default function SignIn(props) {
  const classes = useStyles();
  const auth = useAuth()
  const signInEmailInput = useRef(null);
  const signInPasswordInput = useRef(null);

  const handleSubmit = () => {
    const user = auth.signin(signInEmailInput.current.value, signInPasswordInput.current.value)
  }
  return (
    <div className={classes.outerDiv} >
      <h1 className={classes.h1} >JamUp</h1>

      <input className={classes.input} ref={signInEmailInput} placeholder="Email" />
      <input className={classes.input} type="password" ref={signInPasswordInput} placeholder="password" />
      <button className={classes.input} onClick={handleSubmit} >Submit </button>
      <Link  className={classes.input} to="/signup"><button className={classes.button}> Click to Sign Up</button></Link>
 

    </div>
  )

}



