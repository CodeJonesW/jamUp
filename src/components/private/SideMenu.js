import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useAuth } from "../../Hooks/use-auth";


const useStyles = makeStyles((theme) => ({
    button: {
        width: "80%",
        height: "90%",
        margin: "1%"
    },
    buttonDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: "90%"
        
        
    },
    outer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: '1%'
    }
  }));


const SideMenu = (props) => {
    const auth = useAuth();
    const classes = useStyles();


    return (
        <Grid className={classes.outer} >
            <Grid  className={classes.buttonDiv} item>
                <Button className={classes.button} onClick={() => props.togglePostModal()} variant="contained">Jam 🎹 </Button>
            </Grid>
            <Grid className={classes.buttonDiv} item>
                <Button className={classes.button} variant="contained" onClick={() => props.handleShowFavorites()}>Favorites ❤️</Button>
            </Grid>
            <Grid className={classes.buttonDiv} item>
                <Button className={classes.button} variant="contained">Attending 🎸</Button>
            </Grid>
            <Grid className={classes.buttonDiv} item>
                <Button className={classes.button} onClick={auth.signout} variant="contained">Logout☂️</Button>
            </Grid>
            
        </Grid>
    )
   
    
    
};


export default SideMenu;