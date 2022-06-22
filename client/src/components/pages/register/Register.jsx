import React from "react";
import classes from "./register.module.css";
const Register = () => {
  return (
    <div className={classes.main}>
      <form>
        <div className={classes["wrapper"]}>
          <div className={classes.title}>Register</div>
          <div className={classes["input-email"]}>
            <label>Email</label>
            <input
              type="text"
              required
              name="email"
              className={classes.email}
            />
          </div>
          <div className={classes["input-password"]}>
            <label> Password</label>
            <input
              type="password"
              required
              name="pass"
              className={classes.password}
            />
          </div>
          <div className={classes["input-password"]}>
            <label>Password Again</label>
            <input
              type="password"
              required
              name="pass"
              className={classes.password2}
            />
          </div>
          <div className={classes["button-signUp"]}>
            <button type="submit" className={classes.submit}>Register</button>
            {/* <input type="submit" className={classes.submit} /> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
