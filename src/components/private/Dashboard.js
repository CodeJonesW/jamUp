import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './PrimaryBar'
import JamContainer from './JamContainer'
import SideMenu from './SideMenu'
import { useAuth } from "../../Hooks/use-auth";

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
            <SideMenu />
            <JamContainer jamData={jamData} filteredJams={filteredJams}/>
        </div>
      
    )
   
    
    
};


export default Dashboard;