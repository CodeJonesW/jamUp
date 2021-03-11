import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import banjo from "../../assets/img/banjo.png"
import jamulus from "../../assets/img/jamulus.png"
import discord from "../../assets/img/discord.png"
import bluegrass from "../../assets/img/bluegrass_band.png"
import facebook from "../../assets/img/facebook.png"


const useStyles = makeStyles((theme) => ({
  body: {
    width: "100%",
    height: '100%',
  },
  section: {
    position: "relative",
    width: '100%',
    minHeight: '100vh',
    padding: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "0.5s",
  },
  header: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      padding: "20px 100px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
  },
  logo: {
      position: "relative",
      maxWidth: "80px",
  },
  headerUl: {
      position: "relative",
      display: "flex",

  },
  headerUlLi: {
    listStyle: "none"
  },
  headerUlLiA: {
    display: "inline-block",
    fontWeight: "400px",
    marginLeft: "40px",
    textDecoration: "none",
  },
  content: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  
  textBox: {
    position: "relative",
    maxWidth: "600px",
  },
  textBoxH2: {
    fontSize: "2em",
    lineHeight: "1.5em",
    fontWeight: "900",
    textTransform: "uppercase"
  },
  textBoxH2Span: {
    fontSize: "2em"
  },
  textBoxA: {
    display: "inline-block",
    marginTop: "20px",
    padding: "8px 20px",
    background: "#fff",
    color: "#111",
    borderRadius: "40px;",
    fontWeight: "500",
    letterSpacing: "1px",
    textDecoration: "none",
    textTransform: "uppercase",

    
  },
  imgBox: {
    width: "600px",
    display: "flex",
    paddingRight: "50px",
    justifyContent: "flex-end",
  },
  bandImage: {
    maxWidth: "260px",
    filter: "invert(1)",
    margin: "10%",
    userDrag: "none",
  },
  sci: {
    position: "absolute",
    top: "50%",
    right: "5px",
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      top: "90%"
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      top: "50%",
    },
  },
  sciLi: {
      listStyle: "none"
  },
  sciLiA: {
      display: "inline-block",
      margin: "5px 0px ",
      transform: "scale(0.6)"
  },
  sciImage: {
      maxWidth: "100px",
      userDrag: "none"
  },
}));


export default function Landing(props) {
  const classes = useStyles();

  return (
    <div className={classes.body}>
        <section className={classes.section}> 
            <header className={classes.header}>
                <a href="#"><img alt="jamUp logo" className={classes.logo} src={banjo}></img></a>
                <ul className={classes.headerUl}>
                    <li className={classes.headerUlLi} ><Link to="/about" className={classes.headerUlLiA}>About</Link></li>
                    <li className={classes.headerUlLi}><Link to="/signin" className={classes.headerUlLiA}>SignIn</Link></li>
                    <li className={classes.headerUlLi}><Link to="/signup" className={classes.headerUlLiA}>SignUp</Link></li>
                </ul>
            </header>

            
              <div className={classes.content}>
                  <div className={classes.textBox}>
                      <h2 className={classes.textBoxH2}>Find Jams <br></br> <span className={classes.textBoxH2Span}>Play Online</span> </h2>
                      <p>Join an ongoing jam of your favorite genre or create your own!</p>    
                          <Link to="/signin" className={classes.textBoxA} href="#"> Start Jamming</Link>
                  </div>
                  
                  <div className={classes.imgBox}>
                          <img alt="image of bluegrass band guitar violin cello bass banjo" className={classes.bandImage} src={bluegrass}></img>
                  </div>
                  
              </div>
  
              <ul className={classes.sci}>
                  <li className={classes.sciLi}><a target="_blank" href="https://jamulus.io/" className={classes.sciLiA}><img alt="link to jamulus application website" className={classes.sciImage} src={jamulus}></img></a></li>
                  <li className={classes.sciLi}><a target="_blank" href="https://discord.gg/xhPZPNYzSJ" className={classes.sciLiA}><img alt="link to jamUp discord server" className={classes.sciImage} src={discord} ></img></a></li>
                  <li className={classes.sciLi}><a target="_blank" href="https://facebook.com" className={classes.sciLiA}><img alt="link to jamUp facebook" className={classes.sciImage} src={facebook}></img></a></li>
              </ul>
            
        </section>  

    </div>
    
  )

}


