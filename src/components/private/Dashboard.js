import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './PrimaryBar'
import JamContainer from './JamContainer'
import SideMenu from './SideMenu'
import { useAuth } from "../../Hooks/use-auth";
import { Redirect} from 'react-router-dom';

const Dashboard = (props) => {
    const auth = useAuth();
    const [jamData, setJams] = useState("");
    const [searchTerm, setSearchTerm] = React.useState("");
    const [filteredJams, setFilteredJams] = React.useState("");
  
    useEffect(() => {
      fetch('http://localhost:3000/jams')
      .then(res => res.json())
      .then(data => {
        setJams(data.allJams)
      })
  
     
    }, []);
  
    useEffect(() => {
      if(jamData){
        const results = jamData.filter(jam =>
          jam.title.toLowerCase().includes(searchTerm)
        );
        setFilteredJams(results);
      }
  
    }, [searchTerm]);
  
  
  
    const handleJamSearch = (e) => {
      setSearchTerm(e.target.value);
    }

  

    return (
        <div>
            <PrimarySearchAppBar handleJamSearch={handleJamSearch}></PrimarySearchAppBar>
           
            <SideMenu handleSignOut={props.handleSignOut} />
             
            <Grid container fluid="true">
                <Grid item xs={10}>
                    <JamContainer jamData={jamData} filteredJams={filteredJams}/>
                </Grid>
            </Grid>
        </div>
      
    )
   
    
    
};


export default Dashboard;