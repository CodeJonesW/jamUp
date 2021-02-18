import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    button: {
        width: "80%",
        height: "90%",
        margin: "1%"
    },
    smallButton: {
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
    const classes = useStyles();


    return (
        <Grid className={classes.outer} >
            <Grid  className={classes.buttonDiv} item>
                <Button className={classes.button} onClick={() => props.togglePostModal()} variant="contained">Jam 🎹 </Button>
            </Grid>
            <Grid className={classes.buttonDiv} item>
                { props.displayFavorites ? <Button className={classes.button} variant="contained" onClick={() => props.handleShowFavorites()}>Recent 🎸</Button> : <Button className={classes.button} variant="contained" onClick={() => props.handleShowFavorites()}>Attending Jams 🎸</Button>  }
            </Grid>
            <Grid className={classes.buttonDiv} item>
               🥁
            </Grid>
            <Grid className={classes.buttonDiv} item>
                {props.displayFavorites ? null : <Button  onClick={props.handlePreviousPage}className={classes.smallButton} variant="contained"> ⬅️</Button>}
            </Grid>
            <Grid className={classes.buttonDiv} item>
                {props.displayFavorites ? null : <Button onClick={props.handleNextPage} className={classes.smallButton} variant="contained"> ➡️</Button>}
            </Grid>
          
            
        </Grid>
    )
   
    
    
};


export default SideMenu;