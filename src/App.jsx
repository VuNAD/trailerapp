import Home from "./components/pages/home/Home";
import classes from "./app.module.css";
import ActorInformation from "./components/pages/actor-information/ActorInformation";
import LogInForm from "./components/pages/login/LogInForm"
import SignUp from "./components/pages/register/SignUp";
function App() {
  return (
    <div className={classes.App}>
      <Home />
      {/* <Poster/> */}
    </div>
  );
}

export default App;
