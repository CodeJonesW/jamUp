import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';




const SideMenu = (props) => {

    return (
        <Grid style={{width: "100%", height: "100%",}}>
            <Grid item>
                <Button variant="contained">🔥</Button>
            </Grid>
            <Grid item>
                <Button variant="contained">👌</Button>
            </Grid>
            <Grid item>
                <Button variant="contained"> ☂️</Button>
            </Grid>
        </Grid>
    )
   
    
    
};


export default SideMenu;