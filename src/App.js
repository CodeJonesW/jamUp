import './App.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

function App() {
  const [listOfJams, setJams] = useState(null);

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
        <h1>Hello. This is burger menu tutorial</h1>
      </div>
    </>
  </ThemeProvider>
  );
}

export default App;
