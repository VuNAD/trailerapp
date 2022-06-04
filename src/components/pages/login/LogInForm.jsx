import React, { Fragment } from "react";
import { useState } from "react";
import classes from "./login.module.css";
import NavBar from "../../navbar/NavBar";
const LogInForm = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      email: "user1",
      password: "pass1",
    },
    {
      email: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    email: "Invalid Email or Password",
    pass: "Invalid Email or Password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { email, pass } = document.forms[0];

    const userData = database.find((user) => user.username === email.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={classes.error}>{errorMessages.message}</div>
    );

  const renderForm = (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <div className={classes["input-container"]}>
          <label>Email </label>
          <input type="text" name="email" required className={classes.email} />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className={classes["input-container"]}>
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            className={classes.password}
          />
          {renderErrorMessage("pass") || renderErrorMessage("email")}
        </div>
        <div className={classes["button-container"]}>
          <input type="submit" className={classes.submit} />
        </div>
      </form>
    </div>
  );

  return (
    <Fragment>
      <NavBar />
      <div className={classes.main}>
        <div className={classes["login-form"]}>
          <div className={classes.title}>Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    </Fragment>
  );
};

export default LogInForm;
