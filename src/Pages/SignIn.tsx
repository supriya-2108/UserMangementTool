import React from "react";
import CommonForm from "../Components/CommonForm";
import { LoginProps } from "../utils/types";

const SignIn = () => {
  const LoginObj: LoginProps = {
    heading: "USER SIGNIN",
    type: "Signin",
    placeholder_email: "Username Or Email-Id",
    placeholder_password: "Password",
    button_title: "SignIn",
  };
  return (
    <div>
      <CommonForm formDetails={LoginObj} />
    </div>
  );
};

export default SignIn;
