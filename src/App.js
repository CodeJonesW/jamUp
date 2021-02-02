import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/private/Dashboard'
import SignIn from './components/public/SignIn';
import SignUp from './components/public/SignUp';
import { ProvideAuth } from "./Hooks/use-auth";

function App() {

  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ProvideAuth>
          <Switch>
              <Route exact path="/">
                <SignIn />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/dashboard">
                <Dashboard/>
              </Route>
          </Switch>
      </ProvideAuth>
          
    </ThemeProvider>
  );
}

export default App;
