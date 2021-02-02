import React, { useRef } from 'react';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
  newClass: {
    width: "50vw",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: "25%"
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
    <h1 className={classes.newClass}>JamUp</h1>
      <input ref={signInEmailInput} placeholder="Email" className={classes.newClass}/>
      <input ref={signInPasswordInput} placeholder="password" className={classes.newClass}/>
      <button onClick={handleSubmit} className={classes.newClass}>Submit </button>
      <Link to="/signup"><button className={classes.newClass}> Click here to Sign Up</button></Link>
    </div>
  )

}



