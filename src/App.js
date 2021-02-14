import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/private/Dashboard'
import SignIn from './components/public/SignIn';
import SignUp from './components/public/SignUp';
import { useAuth } from "./Hooks/use-auth";
import Profile from './components/private/Profile'
import About from './components/public/About.js'
function App() {
  
  const auth = useAuth()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
          <Switch>
              <Route path="/about">
                <About /> 
              </Route>
              <Route path="/signup">
                {auth.user ? <Redirect to="/dashboard" /> : <SignUp />}
              </Route>
              <Route path="/dashboard">
                {auth.user ? <Dashboard /> : <Redirect to="/" />}
              </Route>
              <Route path="/profile">
                <Profile /> 
              </Route>
              
              <Route exact path="/">
                {auth.user ? <Redirect to="/dashboard" /> : <SignIn />}
              </Route>

          </Switch>
          
    </ThemeProvider>
  );
}

export default App;
