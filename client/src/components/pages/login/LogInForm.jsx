// import React, { Fragment } from "react";
import { useContext } from "react";
import { useState } from "react";

import { useForm } from "../../../hooks/form-hook";
import classes from "./login.module.css";
import { AuthContext } from "./../../context/authContext/AuthContext";
import Input from "../../form/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../util/validators";

const LogInForm = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    // setIsLoading(true);

    if (isLoginMode) {
      try {
        const response = await fetch("http://localhost:5000/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        console.log("Successfully logged in");
        auth.login();
      } catch (err) {
        // setIsLoading(false);
        setError(err.message || "Something went wrong, please try again.");
      }
    }
  };

  return (
    <div className={classes.main}>
      <form onSubmit={loginSubmitHandler}>
        <div className={classes.wrapper}>
          <div className={classes.title}>LOG IN TO MOVERSE</div>
          <div className={classes.email}>
            <Input
              element="input"
              id="email"
              type="email"
              label="E-Mail"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a valid email address."
              onInput={inputHandler}
            />
          </div>
          <div className={classes.password}>
            <Input
              element="input"
              id="password"
              type="password"
              label="Password"
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText="Please enter a valid password, at least 5 characters."
              onInput={inputHandler}
            />
          </div>
          <div className={classes.login}>
            <button type="submit" className={classes.submit}>
              LOGIN
            </button>
          </div>
          <div className={classes.create}>
            Not a member? Create an account
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
