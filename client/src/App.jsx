import Home from "./components/pages/home/Home";
import classes from "./app.module.css";
import ActorInformation from "./components/pages/actor-information/ActorInformation";
import LogInForm from "./components/pages/login/LogInForm";
import Register from "./components/pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ActorImages from "./components/pages/actor-information/actor-image/ActorImages";

function App() {
  return (
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
            <Route path="/">
              <Home />
            </Route>
            <Route path="/register" exact>
              <Register/>
            </Route>
          </Switch>
        </main>
      </Router>
      {/* <ActorImages/> */}
    </div>
  );
}

export default App;
