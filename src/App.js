import './App.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import PrimarySearchAppBar from './components/PrimaryBar'
import JamContainer from './components/JamContainer'
import SideMenu from './components/SideMenu'
import Grid from '@material-ui/core/Grid';

function App() {
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
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      
        <PrimarySearchAppBar handleJamSearch={handleJamSearch}></PrimarySearchAppBar>
        <Grid container fluid="true">
          <Grid item xs={2}>
            <SideMenu />
          </Grid>

          <Grid item xs={10}>
            <JamContainer jamData={jamData} filteredJams={filteredJams}/>
          </Grid>
        </Grid>
        
     
    </>
  </ThemeProvider>
  );
}

export default App;
