import './App.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import PrimarySearchAppBar from './components/PrimaryBar'
import JamContainer from './components/JamContainer'

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

   
  });

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
      <div>
        <PrimarySearchAppBar handleJamSearch={handleJamSearch}></PrimarySearchAppBar>
        <JamContainer jamData={jamData} filteredJams={filteredJams}/>
      </div>
    </>
  </ThemeProvider>
  );
}

export default App;
