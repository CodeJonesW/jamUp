import React from 'react'
import Jam from './Jam.js'
import Grid from '@material-ui/core/Grid';


const JamContainer = (props) => {

if(props.filteredJams){
    return (
        <Grid container fluid="true">
            {props.filteredJams.map((jam, index) => {
                return (
                    <Grid key={index} item xs={12} sm={6}>
                        <Jam  title={jam.title} genre={jam.genre} info={jam.info} id={jam.id}/>
                    </Grid>
                )
            })}
        </Grid>
    )
} else {
    return (
        <Grid container fluid="true">
            {props.jamData ? props.jamData.map((jam, index) => {
                return(
                    <Grid key={index} item xs={12} sm={6}>
                        <Jam title={jam.title} genre={jam.genre} info={jam.info} id={jam.id}/>
                    </Grid>
                )
            }) : null}
           
           
        </Grid>
    )
}
   
    
    
};


export default JamContainer;