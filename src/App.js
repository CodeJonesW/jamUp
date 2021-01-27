import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {

  const [isLoggedIn, setLoginStatus] = useState(false);

  const handleSignOut = () => {
    setLoginStatus(false)
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    setLoginStatus(true)
  }

  useEffect(() => {
      console.log(isLoggedIn)
  })

  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        {/* <Redirect to="/dashboard" />; */}
          <Switch>
              <Route exact path="/">
                <SignIn handleSignIn={handleSignIn}/>
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/dashboard">
                <Dashboard handleSignOut={handleSignOut}/>
              </Route>
          </Switch>
    </ThemeProvider>
  );
}

export default App;
