import React from "react";
import classes from "./register.module.css";
import { useContext } from "react";
import { useHttpClient } from "../../../hooks/http-hook";
import { AuthContext } from "./../../context/authContext/AuthContext";
// import { useForm } from "react-hook-form";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../util/validators";
import { useForm } from "../../../hooks/form-hook";
import Input from "../../form/Input";
const Register = () => {
  const auth = useContext(AuthContext);

  // const [isLoginMode, setIsLoginMode] = useState(true);
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
          password2: formState.inputs.password2.value,
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
        <div className={classes["wrapper"]}>
          <div className={classes.title}>Register</div>
          <div className={classes["input-name"]}>
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
          <div className={classes["input-email"]}>
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
          <div className={classes["input-password"]}>
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
          <div className={classes["input-password"]}>
            <Input
              element="input"
              id="password2"
              type="password"
              label="Password gain"
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText="Two password must be the same"
              onInput={inputHandler}
            />
          </div>
          <div className={classes["button-signUp"]}>
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
