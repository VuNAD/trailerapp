import Home from "./components/pages/home/Home";
import classes from "./app.module.css";
import ActorInformation from "./components/pages/actor-information/ActorInformation";
import LogInForm from "./components/pages/login/LogInForm";
import Register from "./components/pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import React, { useCallback, useState } from "react";
import { AuthContext } from "./components/context/authContext/AuthContext";
import Review from "./components/pages/review/Review";
// import TrailerDetails from "./components/pages/trailer/details/TrailerDetails";
import Trailer from "./components/pages/trailer/Trailer"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <div className={classes.App}>
        <Router>
          <NavBar />
          <main>
            <Switch>
              <Route path="/actorinformation" exact>
                <ActorInformation />
              </Route>
              <Route path="/login" exact>
                <LogInForm />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Route path="/review" exact>
                <Review />
              </Route>
              <Route path="/trailer" exact>
                <Trailer/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
