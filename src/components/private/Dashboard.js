import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './PrimaryBar'
import JamContainer from './JamContainer'
import SideMenu from './SideMenu'
import { useAuth } from "../../Hooks/use-auth";
import userEvent from '@testing-library/user-event';
import jamCalls from '../../utils/jamAPI'

const Dashboard = (props) => {
    const auth = useAuth();
    const [jamData, setJams] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredJams, setFilteredJams] = useState("");

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

      const [postedJam, setJam] = useState('')

      useEffect(() => {
        // if posted jam changes repopulate state with all previous + new
          
          if(postedJam){
            console.log('newjam', postedJam)
            setJams([...jamData, postedJam])
          }
          
        }, [postedJam]);


      const handlePost = (jamData) => {
        // data from new jam form
        // post to server
          let newJam = jamCalls.postJam(jamData)
        // set new jam state
          setJam(jamData)
        }
    


    return (
        <div>
            <PrimarySearchAppBar handleJamSearch={handleJamSearch}></PrimarySearchAppBar>
            <SideMenu handlePost={handlePost}/>
            <JamContainer jamData={jamData} filteredJams={filteredJams}/>
        </div>
      
    )
   
    
    
};


export default Dashboard;