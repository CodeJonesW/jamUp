import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useAuth } from "../../Hooks/use-auth";
import jamCalls from '../../utils/jamAPI'

const useStyles = makeStyles((theme) => ({
    button: {
        width: "50%",
        
    },
    buttonDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: "100%",
        margin: "2%",
        
    },
    outer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        
    }
  }));


const SideMenu = (props) => {
    const auth = useAuth();
    const classes = useStyles();

    const handlePost = () => {
        jamCalls.postJam({
            title: "Will",
            genre: "it",
            info: "work",
            userId: 1
        })
      }
    


    return (
        <Grid className={classes.outer} >
            <Grid  className={classes.buttonDiv} item>
                <Button className={classes.button} onClick={() => handlePost()} variant="contained">🔥</Button>
            </Grid>
            <Grid className={classes.buttonDiv} item>
                <Button className={classes.button} variant="contained">👌</Button>
            </Grid>
            <Grid className={classes.buttonDiv} item>
                <Button className={classes.button} variant="contained">👌</Button>
            </Grid>
            <Grid className={classes.buttonDiv} item>
                <Button className={classes.button} onClick={auth.signout} variant="contained">☂️</Button>
            </Grid>
            
        </Grid>
    )
   
    
    
};


export default SideMenu;