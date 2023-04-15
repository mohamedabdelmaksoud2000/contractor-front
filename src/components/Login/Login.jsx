import React from "react";
import "./Login.css";
import logo from "./constractor-logo.svg";
const Login = () => {
  return (

    
    <>
    
      <div className="login">
        <img src={logo} alt="" />
        <h1>log in</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <span>Forgot password?</span>
        <button>Log In</button>
        <button>Log in with google</button>
        <span>
          <span>Don't have an account?</span>
          <span>Sign up</span>
        </span>
      </div>
    </>
  );
};

export default Login;
