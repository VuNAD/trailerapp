import React from "react";
import classes from "./register.module.css";
import { useContext } from "react";
import { useHttpClient } from "../../../hooks/http-hook";
import { AuthContext } from "./../../context/authContext/AuthContext";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../util/validators";
import { useForm } from "../../../hooks/form-hook";
import Input from "../../form/Input";
// import Button from "../../button/Button";
const Register = () => {
  const auth = useContext(AuthContext);

  const { sendRequest } = useHttpClient();

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
      username: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const registerSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/user/register",
        "POST",
        JSON.stringify({
          username: formState.inputs.username.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      auth.login(responseData.user.id);
    } catch (err) {}
  };

  return (
    <div className={classes.main}>
      <form onSubmit={registerSubmitHandler}>
        <div className={classes.wrapper}>
          <div className={classes.title}>CREATE AN ACCOUNT</div>
          <div className={classes.username}>
            <Input
              element="input"
              id="username"
              type="username"
              label="Username"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid username."
              onInput={inputHandler}
            />
          </div>
          <div className={classes["email"]}>
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
          <div className={classes["password"]}>
            <Input
              element="input"
              id="password"
              type="password"
              label="Password"
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText="Please enter a valid password, at least 6 characters."
              onInput={inputHandler}
            />
          </div>
          <div className={classes.register}>
            <button type="submit" className={classes.submit}>
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
