import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useAuth } from "../../Hooks/use-auth";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: "12%"
    }
  }));

const SideMenu = (props) => {
    const auth = useAuth();
    const classes = useStyles();
    return (
        <Grid style={{width: "100%", height: "100%",}}>
            <Grid  item>
                <Button className={classes.button} variant="contained">🔥</Button>
            </Grid>
            <Grid item>
                <Button className={classes.button} variant="contained">👌</Button>
            </Grid>
            <Grid item>
                <Button className={classes.button} onClick={(e) => props.handleSignOut(e)} variant="contained"> ☂️</Button>
            </Grid>
        </Grid>
    )
   
    
    
};


export default SideMenu;