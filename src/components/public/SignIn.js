import React, { useRef } from 'react';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  newClass: {
    width: "50%",
    marginTop: '5%'

  },
  button: {
    width: "100%",
    marginTop: '5%'

  },
  outerDiv: {
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
    console.log(user)
  }
  return (
    <div className={classes.outerDiv} >
      <h1 >JamUp</h1>

      <input className={classes.newClass} ref={signInEmailInput} placeholder="Email" />
      <input className={classes.newClass} type="password" ref={signInPasswordInput} placeholder="password" />
      <button className={classes.newClass} onClick={handleSubmit} >Submit </button>
      <Link  className={classes.newClass} to="/signup"><button className={classes.button}> Click to Sign Up</button></Link>
 

    </div>
  )

}



