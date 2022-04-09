import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div className="login">
      <h2>Login</h2>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sign up with Google
      </button>

      <form>
        <br />
        <input placeholder="email" type="email" name="login-email" id="login-email"/>
        <br />
        <input placeholder="password" type="password" name="login-password" id="login-passwrd"/>
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default Login;
