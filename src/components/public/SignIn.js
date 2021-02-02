import React, { useRef } from 'react';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  newClass: {
    width: "50%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: "2%"
  },
  outerDiv: {
    width: "100%",
    alignItems: 'center',
    marginLeft: "10%",
    marginRight: "10%"
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
    <h1 className={classes.newClass}>JamUp</h1>
      <input ref={signInEmailInput} placeholder="Email" className={classes.newClass}/>
      <input type="password" ref={signInPasswordInput} placeholder="password" className={classes.newClass}/>
      <button onClick={handleSubmit} className={classes.newClass}>Submit </button>
      <Link className={classes.newClass} to="/signup"><button > Click here to Sign Up</button></Link>
    </div>
  )

}



