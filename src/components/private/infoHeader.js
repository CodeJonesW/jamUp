import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

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
        opacity: ".6",
        justifyContent: 'left',
        width: "90%"
        
        
    },
    heading: {
        marginLeft: "3%"     
    },
    outer: {
        display: "flex",
        flexDirection: "row",
  
        justifyContent: 'center',
        marginTop: '1%'
    }
  }));


const InfoHeader = (props) => {
    const classes = useStyles();

    if(props.displayFavoritesStatus && props.displayFavoritesStatus) {
        return (
       
            <Grid className={classes.outer} >
                <Grid  className={classes.buttonDiv} item>
                    <h1>Attending Jams</h1>
                </Grid>
                
            </Grid>
        )
    } else {
        return (
       
            <Grid className={classes.outer} >
                <Grid className={classes.buttonDiv} item>
                    <h1 className={classes.heading}>Recently Added</h1>
                    
                </Grid>
                <Grid item>
                    {/* page number is the offset so divide by 4 */}
                    <p>Page: {props.pageNumber/4 + 1}</p>
                </Grid>
              
            </Grid>
        )
    }

   
    
    
};


export default InfoHeader;