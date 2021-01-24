import './App.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import PrimarySearchAppBar from './components/PrimaryBar'
import Jam from './components/Jam.js'


function App() {
  const [jamData, setJams] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/jams')
    .then(res => res.json())
    .then(data => {
      setJams(data)
    })

    
  });

  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <div>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      {jamData ? jamData.allJams.map(jam => {
        return <Jam title={jam.title} genre={jam.genre} info={jam.info}/>
      }) : null}
      </div>
    </>
  </ThemeProvider>
  );
}

export default App;
