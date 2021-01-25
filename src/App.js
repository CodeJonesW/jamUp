import './App.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'


function App() {
  const [token, setToken] = useState();

  const handleLogin = (e) => {
    fetch('http://localhost:3000/login')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setToken(data.token)
    })
  }


  if(!token) {
    return (
      <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <SignIn handleLogin={handleLogin} />
      </ThemeProvider>
      
      </div>

    );
  }


  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/profile">
              {/* <Login /> */}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
