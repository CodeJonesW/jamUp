import React from 'react'
import Jam from './Jam.js'
import Grid from '@material-ui/core/Grid';


const JamContainer = (props) => {

if(props.filteredJams){
    return (
        <Grid container fluid>
           
                <div>
                    {props.filteredJams.map((jam, index) => {
                        return (
                            <Grid item xs={12} sm={4}>
                                <Jam key={index} title={jam.title} genre={jam.genre} info={jam.info}/>
                            </Grid>
                        )
                    })}
                </div>
           
        </Grid>
            
            
   
    )
} else {
    return (
        <Grid container fluid>
           
            {props.jamData ? props.jamData.map((jam, index) => {
                return(
                    <Grid item xs={12} sm={4}>
                        <Jam key={index} title={jam.title} genre={jam.genre} info={jam.info}/>
                    </Grid>
                )
            }) : null}
           
           
        </Grid>
    )
}
   
    
    
};


export default JamContainer;