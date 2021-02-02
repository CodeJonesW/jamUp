import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/private/Dashboard'
import SignIn from './components/public/SignIn';
import SignUp from './components/public/SignUp';
import CreateJamPage from './components/private/CreateJamPage'
import { useAuth } from "./Hooks/use-auth";


function App() {
  
  const auth = useAuth()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
          <Switch>
              <Route exact path="/">
                {auth.user ? <Redirect to="/dashboard" /> : <SignIn />}
              </Route>
              <Route path="/signup">
                {auth.user ? <Redirect to="/dashboard" /> : <SignUp />}
              </Route>
              <Route path="/dashboard">
                {auth.user ? <Dashboard /> : <Redirect to="/" />}
              </Route>

              
              {/* in process */}
              <Route path="/create">
              {/* always redirects for some reason */}
                {auth.user ? <CreateJamPage /> : <Redirect to="/" />}
              </Route>


          </Switch>
          
    </ThemeProvider>
  );
}

export default App;
