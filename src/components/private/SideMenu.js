import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useAuth } from "../../Hooks/use-auth";

const useStyles = makeStyles((theme) => ({
    button: {
        width: "20%",
        margin: "2%"
    },
    outer: {
        display: "flex",
        flexDirection: "row",
        
    }
  }));

const SideMenu = (props) => {
    const auth = useAuth();
    const classes = useStyles();
    return (
        <Grid className={classes.outer} >
            <Grid  className={classes.button} item>
                <Button  variant="contained">🔥</Button>
            </Grid>
            <Grid className={classes.button} item>
                <Button  variant="contained">👌</Button>
            </Grid>
            <Grid className={classes.button} item>
                <Button  variant="contained">👌</Button>
            </Grid>
            <Grid className={classes.button} item>
                <Button  onClick={auth.signout} variant="contained">☂️</Button>
            </Grid>
            
        </Grid>
    )
   
    
    
};


export default SideMenu;