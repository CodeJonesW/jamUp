import React, { useRef } from 'react';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Row } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
  input: {
    width: "50%",
    marginTop: '5%',
    borderRadius: "1px"
  },
  link: {
    width: "24%",
    marginTop: '5%',
    margin: "1%",
    borderRadius: "1px"
  },
  h1: {
    width: "50%",
    marginTop: '5%',
    textAlign: 'center'

  },
  button: {
    width: "100%",

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
  },
  linkDiv: {
    display:"flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: 'center',
  }
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
    <div className={classes.body}>
        <div className={classes.outerDiv} >
          <h1 className={classes.h1} >JamUp</h1>

          <input className={classes.input} ref={signInEmailInput} placeholder="Email" />
          <input className={classes.input} type="password" ref={signInPasswordInput} placeholder="password" />
          <button className={classes.input} onClick={handleSubmit} >Submit </button>
          <div className={classes.linkDiv}>
          <Link  className={classes.link} to="/signup"><button className={classes.button}> Click to Sign Up</button></Link>
          <Link  className={classes.link} to="/about"><button className={classes.button}> Learn about JamUp</button></Link>

          </div>


        </div>
    </div>
    
  )

}



