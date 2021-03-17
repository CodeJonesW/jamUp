import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/private/Dashboard";
import SignIn from "./components/public/SignIn";
import SignUp from "./components/public/SignUp";
import Landing from "./components/public/Landing";
import { useAuth } from "./Hooks/use-auth";
import Profile from "./components/private/Profile";
import About from "./components/public/FAQPage.js";
function App() {
  const auth = useAuth();

  // console.log('yoo==>>', auth)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signin">
          {auth.user !== null ? (
            auth.user ? (
              <Redirect to="/dashboard" />
            ) : (
              <SignIn />
            )
          ) : (
            ""
          )}
        </Route>
        <Route path="/signup">
          {auth.user !== null ? (
            auth.user ? (
              <Redirect to="/dashboard" />
            ) : (
              <SignUp />
            )
          ) : (
            ""
          )}
        </Route>
        <Route path="/dashboard">
          {auth.user !== null ? (
            auth.user ? (
              <Dashboard />
            ) : (
              <Redirect to="/" />
            )
          ) : (
            ""
          )}
        </Route>
        <Route path="/profile">
          {auth.user !== null ? (
            auth.user ? (
              <Profile />
            ) : (
              <Redirect to="/" />
            )
          ) : (
            ""
          )}
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
