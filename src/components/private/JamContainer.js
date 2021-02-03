import React from 'react'
import Jam from './Jam.js'
import Grid from '@material-ui/core/Grid';
import { useAuth } from "../../Hooks/use-auth";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    jamDiv: {
      padding: "1%",
    },
    jamContainer: {
        padding: "1%",
      }
  });


const JamContainer = (props) => {
const classes = useStyles();
const auth = useAuth();
if(props.filteredJams){
    return (
        <Grid className={classes.jamContainer} container fluid="true">
            {props.filteredJams.map((jam, index) => {
                return (
                    <Grid className={classes.jamDiv} key={index} item xs={12} sm={6}>
                        <Jam  title={jam.title} genre={jam.genre} info={jam.info} id={jam.id}/>
                    </Grid>
                )
            })}
        </Grid>
    )
} else {
    return (
        <Grid className={classes.jamContainer} container fluid="true">
            {props.jamData ? props.jamData.map((jam, index) => {
                return(
                    <Grid className={classes.jamDiv} key={index} item xs={12} sm={6}>
                        <Jam title={jam.title} genre={jam.genre} info={jam.info} id={jam.id}/>
                    </Grid>
                )
            }) : null}
           
           
        </Grid>
    )
}
   
    
    
};


export default JamContainer;