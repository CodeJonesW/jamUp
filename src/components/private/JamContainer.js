import React from 'react'
import Jam from './Jam.js'
import Grid from '@material-ui/core/Grid';
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
// console.log(props)
if(props.filteredJams){
    return (
        <Grid className={classes.jamContainer} container fluid="true">
            {props.filteredJams.map((jam, index) => {
                return (
                    <Grid className={classes.jamDiv} key={index} item xs={12} sm={6}>
                        <Jam jamDate={jam.jamDate} handleLearnMore={props.handleLearnMore} handleDeleteJam={props.handleDeleteJam} loggedInUserId={props.loggedInUserId} postFavoriteJam={(e) => props.postFavoriteJam(e)} title={jam.title} genre={jam.genre} info={jam.info} id={jam.id} userId={jam.userId} location={jam.location}/>
                    </Grid>
                )
            })}
        </Grid>
    )
} else if(props.displayFavorites && props.userFavoriteJams) {
    return (
        <Grid className={classes.jamContainer} container fluid="true">
        {/* {console.log("second return", props.userFavoriteJams)} */}
            {props.userFavoriteJams.map((jam, index) => {
               
                return (
                    <Grid className={classes.jamDiv} key={index} item xs={12} sm={6}>
                        <Jam jamDate={jam.jamDate} handleLearnMore={props.handleLearnMore} handleDeleteJam={props.handleDeleteJam} loggedInUserId={props.loggedInUserId} postFavoriteJam={(e) => props.postFavoriteJam(e)} title={jam.title} genre={jam.genre} info={jam.info} id={jam.jamId} userId={jam.userId} location={jam.location}/>
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
                        <Jam jamDate={jam.jamDate} handleLearnMore={props.handleLearnMore} handleDeleteJam={props.handleDeleteJam} loggedInUserId={props.loggedInUserId} postFavoriteJam={(e) => props.postFavoriteJam(e)} title={jam.title} genre={jam.genre} info={jam.info} id={jam.id} userId={jam.userId} location={jam.location}/>
                    </Grid>
                )
            }) : null}
           
           
        </Grid>
    )
}
   
    
    
};


export default JamContainer;