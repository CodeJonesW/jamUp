import React, { useRef } from 'react';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



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
    borderRadius: "1px"

  },
  outerDiv: {
    marginTop: '10%',
    width: "100%",
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

  const handleSubmit = async () => {
    let newUser = await auth.signin(signInEmailInput.current.value, signInPasswordInput.current.value)
  }
  return (
    <div className={classes.body}>
        <div className={classes.outerDiv} >
          <h1 className={classes.h1} >JamUp</h1>

          <input className={classes.input} ref={signInEmailInput} placeholder="Email" />
          <input className={classes.input} type="password" ref={signInPasswordInput} placeholder="password" />
          <Button variant="contained" className={classes.input} onClick={handleSubmit} >Submit </Button>
          <div className={classes.linkDiv}>
          <Link  className={classes.link} to="/signup"><Button variant="contained" className={classes.button}> Sign Up</Button></Link>
          <Link  className={classes.link} to="/about"><Button variant="contained" className={classes.button}> About</Button></Link>

          </div>


        </div>
    </div>
    
  )

}



