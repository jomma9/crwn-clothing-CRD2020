import React from "react";

import SignIn from "../../sign-in/SignIn";
import SignUp from "../../sign-up/SignUp";

import "./sign-in-sign-up.scss";

const SignInSignUp = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
