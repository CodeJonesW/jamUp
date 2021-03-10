import React, { useRef } from 'react';
import { useAuth } from "../../Hooks/use-auth";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import avatar from '../../assets/img/avatar.webp'
import jamCalls from "../../utils/jamAPI"

const useStyles = makeStyles((theme) => ({
  body: {
    width: "100%",
    minHeight: '100vh',
  },
  loginBox: {
   width: "320px",
   minHeight: "420px",
   background: "#fff",
   color: "#000",
   top: "50%",
   left: "50%",
   position: "absolute",
   transform: "translate(-50%, -50%)",
   boxSizing: "border-box",
   padding: "70px 30px",
   borderRadius: "20px"
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "40%",
    position: "absolute",
    top: "-50px",
    left: "calc(50% - 50px)",
  },
  h1: {
      margin: "0",
      padding: "0 0 20px",
      textAlign: "center",
      fontSize: "22px",
      fontStyle: "bold"
  },
  loginBoxP: {
      margin: "0",
      padding: "0",
      fontWeight: "bold",
  },
  loginBoxInputText: {
      width: "100%",
      marginBottom: "20px",
      border: "none",
      borderBottom: "1px solid #000",
      background: "transparent",
      outline: "none",
      height: "35px",
      color: "#000",
      fontSize: "16px"
  },
  loginBoxInputSubmit: {
    width: "100%",
    marginBottom: "20px",
    margin: "0",
    padding: "0",
    border: "none",
    outline: "none",
    height: "40px",
    background: "#0e0c1d",
    color: "#fff",
    fontSize: "18px",
    borderRadius: "20px",
    fontStyle: "none",
    "&:hover": {
        cursor: 'pointer',
        background: "#343078"
      }
    },
    loginBoxA: {
        textDecoration: "none",
        fontSize: "14px",
        lineHeight: "20px",
        color: "#0D0C1D"
    }

}));


export default function SignUp(props) {
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
    .then(() => {
      console.log("posted")
    })
  }

  return (
    <div className={classes.body}>
       <div className={classes.loginBox}>
           <img className={classes.avatar} src={avatar}></img>
           <h1 className={classes.h1}>Sign Up Here</h1>
           <p className={classes.loginBoxP}>Email</p>
           <input className={classes.loginBoxInputText} type="text" ref={signUpEmailInput} name="" placeholder="Enter Email"></input>
           <p className={classes.loginBoxP}>Password</p>
           <input className={classes.loginBoxInputText} type="password" name="" ref={signUpPasswordInput} placeholder="Enter Password"></input>
           <p className={classes.loginBoxP}>Confirm Password</p>
           <input className={classes.loginBoxInputText} type="password" name="" ref={signUpConfirmPasswordInput} placeholder="Enter Password"></input>

           <Button className={classes.loginBoxInputSubmit} onClick={handleSubmit} type="submit" name="" >Login</Button><br></br>
           <Link  className={classes.loginBoxA} to="/signin"><p variant="contained" className={classes.loginBoxA}> Already have an account?</p></Link>
           <Link  className={classes.loginBoxA} to="/about"><p variant="contained" className={classes.loginBoxA}> FAQ</p></Link>

       </div>
    </div>
    
  )

}


