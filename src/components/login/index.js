import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import { LoginContainer, LoginInnerContainer } from "./Login";
const Login = () => {
  const signIn = e => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch(error => {
      alert(error.message);
    });
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to the SLACK Clone</h1>
        <p>luke.slack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;
