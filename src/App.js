import './App.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'

function App() {

  const [isLoggedIn, setLoginStatus] = useState(false);

  if (!isLoggedIn) {
    return (
      <div>
       <ThemeProvider theme={theme}>
       <GlobalStyles />

       <Redirect to="/" />

          <Switch>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
          
       </ThemeProvider>
  


      </div>
   
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Redirect to="/dashboard" />;

          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/login">
              <SignIn />
            </Route>
          </Switch>
       
      
    </ThemeProvider>
  );
}

export default App;
