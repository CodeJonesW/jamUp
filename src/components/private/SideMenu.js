import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useAuth } from "../../Hooks/use-auth";


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


    return (
        <Grid className={classes.outer} >
            <Grid  className={classes.buttonDiv} item>
                <Button className={classes.button} onClick={() => props.togglePostModal()} variant="contained">New jam🔥</Button>
            </Grid>
            <Grid className={classes.buttonDiv} item>
                <Button className={classes.button} variant="contained" onClick={() => props.handleShowFavorites()}>Favorite ❤️</Button>
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